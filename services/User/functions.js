import asyncForEach from 'Tools/asyncForEach';
import {
	requestUser,
	requestInstalls,
	requestDevices,
} from './requests';

export const getDevices = async (dispatch, userId, installId) => {
	dispatch({ type: 'deviceUpdateStart', payload: { userId, installId } });
	try {
		const data = await requestDevices(userId, installId);
		dispatch({
			type: 'deviceUpdateSuccess',
			payload: {
				data,
				userId,
				installId,
			},
		});
	} catch (error) {
		dispatch({ type: 'deviceUpdateFail', payload: { error, userId, installId } });
	}
};

export const getUser = async (dispatch, userId) => {
	dispatch({ type: 'userUpdateStart', payload: { userId } });
	try {
		const userData = await requestUser(userId);
		const finalUser = {
			...userData,
			installations: [],
		};
		const installsData = await requestInstalls(finalUser.id);
		console.log('INSTALLS: ', installsData);
		await asyncForEach(installsData, async (install) => {
			install.devices = await requestDevices(finalUser.id, install.id);
		});
		finalUser.installations = installsData;
		console.log('USER: ', finalUser);
		dispatch({
			type: 'userUpdateSuccess',
			payload: {
				userId,
				data: finalUser,
			},
		});
	} catch (error) {
		dispatch({ type: 'userUpdateFail', payload: { error, userId } });
	}
};

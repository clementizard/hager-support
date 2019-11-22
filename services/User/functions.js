import asyncForEach from 'Tools/asyncForEach';
import {
	requestUser,
	requestInstalls,
	requestDevices,
} from './requests';

export const getDevices = async (dispatch, userId, installId) => {
	dispatch({ type: 'updateStart' });
	try {
		const data = await getNewUser();
		dispatch({
			type: 'updateSuccess',
			payload: formatNewUser(data),
		});
	} catch (error) {
		dispatch({ type: 'updateFail', payload: error });
	}
};

export const getUser = async (dispatch, userId) => {
	dispatch({ type: 'updateStart' });
	try {
		const userData = await requestUser(userId);
		const finalUser = {
			...userData,
			installations: [],
		};
		const installsData = await requestInstalls(finalUser.id);
		await asyncForEach(installsData, async (install) => {
			const devicesData = await requestDevices(finalUser.id, install.id);
			install.devices = devicesData;
		});
		finalUser.installations = installsData;
		dispatch({
			type: 'updateSuccess',
			payload: finalUser,
		});
	} catch (error) {
		dispatch({ type: 'updateFail', payload: error });
	}
};

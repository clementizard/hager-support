import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';

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

const formatTimeDevice = (devices) => {
	devices.forEach(device => {
		if (device.date && device.date.length < 50) {
			device.date = format(fromUnixTime(parseInt(device.date, 10)), 'dd/MM/y');
			device.lastEdit = device.lastEdit ? format(fromUnixTime(parseInt(device.lastEdit, 10)), 'dd/MM/y - HH:mm') : '';
			device.lastDataExchanged = format(fromUnixTime(parseInt(device.lastDataExchanged, 10)), 'dd/MM/y - HH:mm');
		}
	});
	return devices
};

const formatTime = (installs) => {
	installs.forEach(install => {
		if (install.date && install.date.length < 50) {
			install.date = format(fromUnixTime(parseInt(install.date, 10)), 'dd/MM/y');
			install.heartbit = format(fromUnixTime(parseInt(install.heartbit, 10)), 'dd/MM/y - HH:mm');
		}
	});
	return installs;
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
		const formattedInstalls = formatTime(installsData);
		await asyncForEach(formattedInstalls, async (install) => {
			const deviceData = await requestDevices(finalUser.id, install.id);
			install.devices = formatTimeDevice(deviceData);
		});
		finalUser.installations = formattedInstalls;
		dispatch({
			type: 'userUpdateSuccess',
			payload: {
				userId,
				data: finalUser,
			},
		});
	} catch (error) {
		console.error(error);
		dispatch({ type: 'userUpdateFail', payload: { error, userId } });
	}
};

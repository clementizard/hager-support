// import axios from 'axios';
import mockUser from './mock_user';
import mockInstall from './mock_installations';
import mockDevices from './mock_devices';

export const requestUser = async (userId) => {
	// return await axios.get(`/users/${userId}`);
	return await new Promise((resolve) => {
		const foundUser = mockUser.find(user => user.id === userId);
		setTimeout(() => resolve(foundUser), 1000);
	});
};


export const requestInstalls = async (userId) => {
	// return await axios.get(`/users/${userId}/installations`);
	return await new Promise((resolve) => {
		const foundInstall = mockInstall.find(install => install.userId === userId);
		setTimeout(() => resolve(foundInstall), 1000);
	});
};


export const requestDevices = async (userId, installId) => {
	// return await axios.get(`/users/${userId}/installations/${installId}/devices`);
	return await new Promise((resolve) => {
		const foundDevices = mockDevices.find(device => device.installId === installId);
		setTimeout(() => resolve(foundDevices), 1000);
	});
};


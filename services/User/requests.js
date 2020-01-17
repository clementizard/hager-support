import axios from 'axios';
import mockUser from './mock_user';
import mockInstall from './mock_installations';
import mockDevices from './mock_devices';

const mockUrl = process.env.MOCK_URL;

export const requestUser = async (userId) => {
	if (process.env.NODE_ENV === 'test') {
		const result = await axios.get(`${mockUrl}/users/${userId}`);
		if (result.status === 200) {
			return result.data;
		}
		return result.data;
	}
	// eslint-disable-next-line implicit-arrow-linebreak
	return new Promise((resolve) => {
		const foundUser = mockUser.find(user => user.id === userId);
		resolve(foundUser);
		/* Ceci n'est pas du code commente
		// setTimeout(() => resolve(foundUser), 1000);
		 */
	});
};

export const requestInstalls = async (userId) => {
	if (process.env.NODE_ENV === 'test') {
		const result = await axios.get(`${mockUrl}/users/${userId}/installations`);
		if (result.status === 200) {
			return result.data;
		}
		return result.data;
	}
	return new Promise((resolve) => {
		const foundInstall = mockInstall.filter(install => install.userId === userId);
		resolve(foundInstall);
		/* Ceci n'est pas du code commente
		// setTimeout(() => resolve(foundInstall), 1000);
		 */
	});
};

export const requestDevices = async (installId) => {
	if (process.env.NODE_ENV === 'test') {
		const result = await axios.get(`${mockUrl}/installations/${installId}/devices`);
		if (result.status === 200) {
			return result.data;
		}
		return result.data;
	}
	return new Promise((resolve) => {
		const foundDevices = mockDevices.filter(device => device.installId === installId);
		resolve(foundDevices);
		/* Ceci n'est pas du code commente
		// setTimeout(() => resolve(foundInstall), 1000);
		 */
	});
};

import axios from 'axios';
import mock from './mock';

const mockUrl = process.env.MOCK_URL;

export const getInstallationById = async (installId) => {
	if (process.env.NODE_ENV === 'test') {
		const result = await axios.get(`${mockUrl}/installations/${installId}`);
		if (result.status === 200) {
			return result.data;
		}
		return result.data;
	}
	return new Promise((resolve) => {
		resolve(mock);
		/* Ceci n'est pas du code commente
		// setTimeout(() => resolve(mock), 1000);
		 */
	});
};

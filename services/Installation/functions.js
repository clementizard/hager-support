import { getInstallationById } from './requests';

export const formatNewInstallation = (data) => {
	return data;
};

export const getInstallation = async (dispatch, installId) => {
	dispatch({ type: 'updateStart', payload: { installId } });
	try {
		const data = await getInstallationById(installId);
		dispatch({
			type: 'updateSuccess',
			payload: {
				installId,
				data: formatNewInstallation(data),
			},
		});
	} catch (error) {
		dispatch({ type: 'updateFail', payload: { error, installId } });
	}
};

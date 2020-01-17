import { useEffect } from 'react';
import { useInstallationDispatch, useInstallationState } from './context';
import { getInstallation } from './functions';

export default (installId) => {
	const { status, data } = useInstallationState();
	const dispatch = useInstallationDispatch();

	useEffect(() => {
		if (!data || !data.length) getInstallation(dispatch, installId);
	}, [data, dispatch]);

	return { status, data };
};

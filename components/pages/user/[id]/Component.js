import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { withTranslation } from 'Tools/i18n';
import { getLayout } from 'Layouts/LayoutUser';
import { useUserState, useUserDispatch, getUser } from 'Services/User';
import User from './User';
import Errors from './Errors';
import Installs from './Installations';
import Devices from './Devices';
import Container from './Styles';
import propTypes from './Props';
import getEquipmentsInError from './Tools';

const UserDetails = ({ t }) => {
	const router = useRouter();
	const { id } = router.query;
	const dispatch = useUserDispatch();
	const { data, status: { users }, selected } = useUserState();

	useEffect(() => {
		const fetchData = async () => {
			await getUser(dispatch, id);
		};
		if (Boolean(id) && !data[id]) { // User Unknown, launch getUser Phase.
			fetchData();
		}
	}, [data, dispatch, id]);

	if (!data[id] || users[id] === 'loading') return [];
	if (users[id] === 'error') return <>error</>;

	const {
		installations,
		id: userId,
		firstname,
		lastname,
		email,
	} = data[id];

	const handleSelectInstall = installId => () => {
		if (selected[userId] && selected[userId].install === installId) { // Already selected
			dispatch({ type: 'userDeselectInstall', payload: { userId } });
		} else { // New selected
			dispatch({
				type: 'userSelect',
				payload: {
					userId,
					value: installId,
					item: 'install',
				},
			});
		}
	};
	const selectedInstall = selected[userId]
		&& selected[userId].install
		&& installations.find(el => el.id === selected[userId].install);
	const selectedInstallDevices = selectedInstall && selectedInstall.devices;
	const failingEquipments = getEquipmentsInError(installations);

	const localizationText = {
		pagination: {
			labelDisplayedRows: t('userdetails:tableLabels.pagination.labelDisplayedRows'),
			labelRowsSelect: t('userdetails:tableLabels.pagination.labelRowsSelect'),
			firstTooltip: t('userdetails:tableLabels.pagination.firstTooltip'),
			previousTooltip: t('userdetails:tableLabels.pagination.previousTooltip'),
			nextTooltip: t('userdetails:tableLabels.pagination.nextTooltip'),
			lastTooltip: t('userdetails:tableLabels.pagination.lastTooltip'),
		},
		toolbar: {
			searchTooltip: t('userdetails:tableLabels.toolbar.searchTooltip'),
			searchPlaceholder: t('userdetails:tableLabels.toolbar.searchPlaceholder'),
		},
	};

	return (
		<Container>
			<User
				firstname={firstname}
				lastname={lastname}
				email={email}
				userId={userId}
			/>
			<Errors
				failingEquipments={failingEquipments}
				localizationText={localizationText}
			/>
			<Installs
				localizationText={localizationText}
				installations={installations}
				handleSelectInstall={handleSelectInstall}
				selectedInstall={selectedInstall}
			/>
			<Devices
				localizationText={localizationText}
				selectedInstallDevices={selectedInstallDevices}
			/>
		</Container>
	);
};
UserDetails.propTypes = propTypes;
UserDetails.getLayout = getLayout;
UserDetails.whyDidYouRender = true;

export default withTranslation('userdetails')(UserDetails);

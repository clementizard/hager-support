import React, { useEffect, memo } from 'react';
import { useRouter } from 'next/router'
import Assessment from '@material-ui/icons/Assessment';
import AssessmentOutlined from '@material-ui/icons/AssessmentOutlined';
import MaterialTable from 'material-table';

import { withTranslation } from 'Tools/i18n';
import TableIcons from 'Tools/tableIcons';
import { getLayout } from 'Layouts/LayoutUser';
import { useUserState, useUserDispatch, getUser } from 'Services/User';
import {
	Container,
	Details,
	Devices,
	Errors,
	Installs,
	User,
	Title,
	DetailsContainer,
	DetailsContent,
	DetailsTitle,
	UserInfos,
	UserInfoTitle,
	UserInfo,
	DetailsInner,
} from './Styles';
import { getEquipmentsInError } from './Tools';

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
	}, [id]);
	
	if (!data[id] || users[id] === 'loading') return (null);
	if (users[id] === 'error') return <>error: {data[id]}</>;
	
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
	const selectedInstall = selected[userId] && selected[userId].install && installations.find(el => el.id === selected[userId].install);
	const selectedInstallDevices = selectedInstall && selectedInstall.devices;
	const failingEquipments = getEquipmentsInError(installations);
	
	return (
		<Container>
			<User>
				<Title>{t('userdetails:userPanel.title')}</Title>
				<UserInfos>
					<UserInfoTitle>{t('userdetails:userPanel.firstname')}: </UserInfoTitle>
					<UserInfo>{firstname}</UserInfo>
					<UserInfoTitle>{t('userdetails:userPanel.lastname')}: </UserInfoTitle>
					<UserInfo>{lastname}</UserInfo>
					<UserInfoTitle>{t('userdetails:userPanel.email')}: </UserInfoTitle>
					<UserInfo>{email}</UserInfo>
					<UserInfoTitle>{t('userdetails:userPanel.myHagerId')}: </UserInfoTitle>
					<UserInfo>{userId}</UserInfo>
				</UserInfos>
			</User>
			<Errors>
				<MaterialTable
					icons={TableIcons}
					title={t('userdetails:errorPanel.title')}
					columns={[
						{ title: t('userdetails:errorPanel.type'), field: 'type', cellStyle: { minWidth: 115 } },
						{ title: t('userdetails:errorPanel.name'), field: 'name', cellStyle: { minWidth: 115 } },
					]}
					data={failingEquipments}
					options={{
						rowStyle: { backgroundColor: 'var(--status-error-background-alternative)' },
						search: false,
						paging: false,
					}}
					parentChildData={(row, rows) => rows.find(el => el.id === row.parentId)}
				/>
			</Errors>
			<Installs>
				<MaterialTable
					icons={TableIcons}
					title={t('userdetails:installPanel.title')}
					columns={[
						{ title: t('userdetails:installPanel.name'), field: 'name', cellStyle: { minWidth: 115 } },
						{ title: t('userdetails:installPanel.appCode'), field: 'appCode', cellStyle: { minWidth: 115 } },
						{ title: t('userdetails:installPanel.mainSerialNumber'), field: 'idExternal', cellStyle: { minWidth: 300 } },
						{ title: t('userdetails:installPanel.ownerEmail'), field: 'emailOwner', cellStyle: { minWidth: 265 } },
						{ title: t('userdetails:installPanel.installerEmail'), field: 'emailInstaller', cellStyle: { minWidth: 265 } },
						{ title: t('userdetails:installPanel.postalCode'), field: 'postalCode', type: 'numeric', cellStyle: { minWidth: 115 } },
						{ title: t('userdetails:installPanel.city'), field: 'city', cellStyle: { minWidth: 150 } },
						{ title: t('userdetails:installPanel.country'), field: 'country', cellStyle: { minWidth: 160 } },
						{ title: t('userdetails:installPanel.installedDate'), field: 'date', type: 'date', cellStyle: { minWidth: 120 } },
						{ title: t('userdetails:installPanel.heartbit'), field: 'heartbit', type: 'date', cellStyle: { minWidth: 175 } },
					]}
					data={installations}
					onRowClick={(event, rowData) => handleSelectInstall(rowData.id)()}
					options={{
						rowStyle: rowData => {
							let backgroundColor = selectedInstall && selectedInstall.id === rowData.id ? '#EEE' : '#FFF';
							switch (rowData.status) {
								case 'ko':
									backgroundColor = `var(--status-error-${selectedInstall && selectedInstall.id === rowData.id ? 'background' : 'background-alternative'})`;
									break;
								case 'warn':
									backgroundColor = `var(--status-warning-${selectedInstall && selectedInstall.id === rowData.id ? 'background' : 'background-alternative'})`;
									break;
							}
							return ({ backgroundColor });
						},
						// searchText: selected[userId] && selected[userId].search,
					}}
					// onSearchChange={handleSearchChange}
				/>
			</Installs>
			<Devices>
				<MaterialTable
					icons={TableIcons}
					title={t('userdetails:devicePanel.title')}
					columns={[
						{ title: t('userdetails:devicePanel.type'), field: 'type' },
						{ title: t('userdetails:devicePanel.serial'), field: 'serial', cellStyle: { minWidth: 300 } },
						{ title: t('userdetails:devicePanel.reference'), field: 'reference', cellStyle: { minWidth: 110 } },
						{ title: t('userdetails:devicePanel.softwareVersion'), field: 'softwareVersion', cellStyle: { minWidth: 150 } },
						{ title: t('userdetails:devicePanel.installedDate'), field: 'date', type: 'date', cellStyle: { minWidth: 120 } },
						{ title: t('userdetails:devicePanel.lastEdit'), field: 'lastEdit', type: 'date', cellStyle: { minWidth: 175 } },
						{ title: t('userdetails:devicePanel.lastDataExchanged'), field: 'lastDataExchanged', type: 'date', cellStyle: { minWidth: 175 } },
					]}
					detailPanel={[
						(rowData) => ({
							disabled: !rowData.details || !Object.keys(rowData.details).length,
							render: () => (
								<DetailsContainer>
									<DetailsInner>
										{rowData.details && Object.keys(rowData.details).map(key => (
											<div key={key}>
												<DetailsTitle>{key}:</DetailsTitle>
												<DetailsContent>
													{rowData.details[key]}
												</DetailsContent>
											</div>
										))}
									</DetailsInner>
								</DetailsContainer>
							),
						}),
						(rowData) => ({
							disabled: !rowData.insights || !Object.keys(rowData.insights).length,
							icon: Assessment,
							openIcon: AssessmentOutlined,
							render: () => (
								<DetailsContainer>
									<DetailsInner>
										{rowData.insights && Object.keys(rowData.insights).map(key => (
											<div key={key}>
												<DetailsTitle>{key}:</DetailsTitle>
												<DetailsContent>
													{rowData.insights[key]}
												</DetailsContent>
											</div>
										))}
									</DetailsInner>
								</DetailsContainer>
							)
						}),
					]}
					data={selectedInstallDevices || undefined}
					onRowClick={(event, rowData, togglePanel) => (rowData.details && Object.keys(rowData.details).length) && togglePanel()}
					options={{
						rowStyle: rowData => {
							let backgroundColor = '#FFF';
							switch (rowData.status) {
								case 'ko':
									backgroundColor = 'var(--status-error-background-alternative)';
									break;
								case 'warn':
									backgroundColor = 'var(--status-warning-background-alternative)';
									break;
							}
							return ({
								backgroundColor,
								cursor: rowData.details && Object.keys(rowData.details).length ? 'pointer' : 'default !important',
							});
						},
					}}
				/>
			</Devices>
			<Details />
		</Container>
	);
};
UserDetails.getLayout = getLayout;
UserDetails.whyDidYouRender = true;

export default withTranslation('userdetails')(UserDetails);


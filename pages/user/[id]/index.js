import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress';
import Assessment from '@material-ui/icons/Assessment';
import AssessmentOutlined from '@material-ui/icons/AssessmentOutlined';
import MaterialTable from 'material-table';

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

const Index = () => {
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
	
	if (!data[id] || users[id] === 'loading') return (<CircularProgress />);
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
	
	console.log('failingEquipments', failingEquipments);
	
	return (
		<Container>
			<User>
				<Title>User</Title>
				<UserInfos>
					<UserInfoTitle>Firstname: </UserInfoTitle>
					<UserInfo>{firstname}</UserInfo>
					<UserInfoTitle>Lastname: </UserInfoTitle>
					<UserInfo>{lastname}</UserInfo>
					<UserInfoTitle>Email: </UserInfoTitle>
					<UserInfo>{email}</UserInfo>
					<UserInfoTitle>Id: </UserInfoTitle>
					<UserInfo>{userId}</UserInfo>
				</UserInfos>
			</User>
			<Errors>
				<MaterialTable
					icons={TableIcons}
					title="Errors"
					columns={[
						{ title: 'Type', field: 'type', cellStyle: { minWidth: 115 } },
						{ title: 'Name', field: 'name', cellStyle: { minWidth: 115 } },
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
					title="Installations"
					columns={[
						{ title: 'Name', field: 'name' },
						{ title: 'App Code', field: 'appCode', cellStyle: { minWidth: 115 } },
						{ title: 'Id External', field: 'idExternal', cellStyle: { minWidth: 300 } },
						{ title: 'Owner Email', field: 'emailOwner', cellStyle: { minWidth: 265 } },
						{ title: 'Installer Email', field: 'emailInstaller', cellStyle: { minWidth: 265 } },
						{ title: 'Postal Code', field: 'postalCode', type: 'numeric', cellStyle: { minWidth: 115 } },
						{ title: 'City', field: 'city' },
						{ title: 'Country', field: 'country', cellStyle: { minWidth: 160 } },
						{ title: 'Installed Date', field: 'date', type: 'date', cellStyle: { minWidth: 480 } },
						{ title: 'Heartbit', field: 'heartbit', type: 'date', cellStyle: { minWidth: 480 } },
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
					title="Devices"
					columns={[
						{ title: 'Id', field: 'id' },
						{ title: 'Name', field: 'name' },
						{ title: 'Type', field: 'type' },
						{ title: 'Serial Number', field: 'serial', cellStyle: { minWidth: 300 } },
						{ title: 'Reference', field: 'reference', cellStyle: { minWidth: 280 } },
						{ title: 'Software Version', field: 'softwareVersion', cellStyle: { minWidth: 150 } },
						{ title: 'Installed Date', field: 'date', type: 'date', cellStyle: { minWidth: 480 } },
						{ title: 'Last Edit', field: 'lastEdit', type: 'date', cellStyle: { minWidth: 480 } },
						{ title: 'Last Data Exchanged', field: 'lastDataExchanged', type: 'date', cellStyle: { minWidth: 480 } },
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
Index.getLayout = getLayout;

export default Index;


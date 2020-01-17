import React from 'react';
import MaterialTable from 'material-table';

import { withTranslation } from 'Tools/i18n';
import TableIcons from 'Tools/tableIcons';
import Container from './Styles';
import { propTypes, defaultProps } from './Props';

const Installs = ({
	t,
	localizationText,
	installations,
	handleSelectInstall,
	selectedInstall,
}) => (
	<Container data-cy="user-detail-install">
		<MaterialTable
			icons={TableIcons}
			title={t('userdetails:installPanel.title')}
			columns={[
				{ title: t('userdetails:installPanel.name'), field: 'name', cellStyle: { minWidth: 115 } },
				{ title: t('userdetails:installPanel.appCode'), field: 'appCode', cellStyle: { minWidth: 115 } },
				{ title: t('userdetails:installPanel.mainSerialNumber'), field: 'idExternal', cellStyle: { minWidth: 300 } },
				{ title: t('userdetails:installPanel.ownerEmail'), field: 'emailOwner', cellStyle: { minWidth: 265 } },
				{ title: t('userdetails:installPanel.installerEmail'), field: 'emailInstaller', cellStyle: { minWidth: 265 } },
				{
					title: t('userdetails:installPanel.postalCode'), field: 'postalCode', type: 'numeric', cellStyle: { minWidth: 115 }
				},
				{ title: t('userdetails:installPanel.city'), field: 'city', cellStyle: { minWidth: 150 } },
				{ title: t('userdetails:installPanel.country'), field: 'country', cellStyle: { minWidth: 160 } },
				{
					title: t('userdetails:installPanel.installedDate'), field: 'date', type: 'date', cellStyle: { minWidth: 120 }
				},
				{
					title: t('userdetails:installPanel.heartbit'), field: 'heartbit', type: 'date', cellStyle: { minWidth: 175 }
				}
			]}
			data={installations}
			onRowClick={(event, rowData) => handleSelectInstall(rowData.id)()}
			options={{
				rowStyle: (rowData) => {
					let backgroundColor = selectedInstall && selectedInstall.id === rowData.id ? '#EEE' : '#FFF';
					switch (rowData.status) {
						case 'ko':
							backgroundColor = `var(--status-error-${selectedInstall && selectedInstall.id === rowData.id ? 'background' : 'background-alternative'})`;
							break;
						case 'warn':
							backgroundColor = `var(--status-warning-${selectedInstall && selectedInstall.id === rowData.id ? 'background' : 'background-alternative'})`;
							break;
						default: break;
					}
					return ({ backgroundColor });
				},
				draggable: false
			}}
			localization={localizationText}
		/>
	</Container>
);
Installs.propTypes = propTypes;
Installs.defaultProps = defaultProps;
Installs.whyDidYouRender = true;

export default withTranslation('userdetails')(Installs);

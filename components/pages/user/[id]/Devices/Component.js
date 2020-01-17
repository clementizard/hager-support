import React from 'react';
import dynamic from 'next/dynamic';
import MaterialTable from 'material-table';
import Badge from '@material-ui/core/Badge';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Assessment from '@material-ui/icons/Assessment';
import AssessmentOutlined from '@material-ui/icons/AssessmentOutlined';

import { withTranslation } from 'Tools/i18n';
import TableIcons from 'Tools/tableIcons';
import { propTypes, defaultProps } from './Props';
import { Container } from './Styles';

// https://github.com/babel/babel-eslint/issues/530
const Details = dynamic(() => import('./Details' /* webpackChunkName:"Details" */));

const Devices = ({
  t,
  selectedInstallDevices,
  localizationText
}) => (
	<Container data-cy="user-detail-devices">
		<MaterialTable
			icons={TableIcons}
			title={t('userdetails:devicePanel.title')}
			columns={[
				{ title: t('userdetails:devicePanel.type'), field: 'type' },
				{ title: t('userdetails:devicePanel.serial'), field: 'serial', cellStyle: { minWidth: 300 } },
				{ title: t('userdetails:devicePanel.reference'), field: 'reference', cellStyle: { minWidth: 110 } },
				{ title: t('userdetails:devicePanel.softwareVersion'), field: 'softwareVersion', cellStyle: { minWidth: 150 } },
				{
					title: t('userdetails:devicePanel.installDate'),
					field: 'date',
					type: 'date',
					cellStyle: { minWidth: 120 }
				},
				{
					title: t('userdetails:devicePanel.lastDataExchanged'),
					field: 'lastDataExchanged',
					type: 'date',
					cellStyle: { minWidth: 120 }
				}
			]}
			detailPanel={[
				rowData => ({
					disabled: !rowData.details || !Object.keys(rowData.details).length,
					icon: () => rowData.details
						&& rowData.details.messages
						&& rowData.details.messages.length ? (
							<Badge badgeContent={rowData.details.messages.length} color="error">
								<ArrowRight />
							</Badge>
					) : (<ArrowRight />),
					openIcon: () => rowData.details
						&& rowData.details.messages
						&& rowData.details.messages.length ? (
							<Badge badgeContent={rowData.details.messages.length} color="error">
								<ArrowDown />
							</Badge>
					) : (<ArrowDown />),
					render: () => (<Details rowData={rowData} />)
				}),
				rowData => ({
					disabled: !rowData.insights || !Object.keys(rowData.insights).length,
					iconProps: {
						'data-cy': `devices-insights-btn-${rowData.type}`
					},
					icon: Assessment,
					openIcon: AssessmentOutlined,
					render: () => (<Details rowData={rowData} type="insights" />)
				}),
			]}
			data={selectedInstallDevices || undefined}
			/* eslint-disable-next-line max-len */
			onRowClick={(event, rowData, togglePanel) => (rowData.details && Object.keys(rowData.details).length) && togglePanel()}
			options={{
				draggable: false,
				rowStyle: (rowData) => {
					let backgroundColor = '#FFF';
					switch (rowData.status) {
						case 'ko':
							backgroundColor = 'var(--status-error-background-alternative)';
							break;
						case 'warn':
							backgroundColor = 'var(--status-warning-background-alternative)';
							break;
						default: break;
					}
					return ({
						backgroundColor,
						cursor: rowData.details && Object.keys(rowData.details).length ? 'pointer' : 'default !important',
					});
				}
			}}
			localization={localizationText}
		/>
	</Container>
);
Devices.propTypes = propTypes;
Devices.defaultProps = defaultProps;
Devices.whyDidYouRender = true;

export default withTranslation('userdetails')(Devices);

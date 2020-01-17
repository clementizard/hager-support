import React from 'react';
import MaterialTable from 'material-table';

import { withTranslation } from 'Tools/i18n';
import TableIcons from 'Tools/tableIcons';
import {
	Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const Errors = ({
	t,
	failingEquipments,
	localizationText,
}) => (
	<Container>
		<MaterialTable
			icons={TableIcons}
			title={t('userdetails:errorPanel.title')}
			columns={[
				{ title: t('userdetails:errorPanel.type'), field: 'type', cellStyle: { minWidth: 115 } },
				{ title: t('userdetails:errorPanel.name'), field: 'name', cellStyle: { minWidth: 115 } }
			]}
			data={failingEquipments}
			options={{
				rowStyle: { backgroundColor: 'var(--status-error-background-alternative)' },
				search: false,
				paging: false,
				draggable: false
			}}
			parentChildData={(row, rows) => rows.find(el => el.id === row.parentId)}
			localization={localizationText}
		/>
	</Container>

);
Errors.propTypes = propTypes;
Errors.defaultProps = defaultProps;
Errors.whyDidYouRender = true;

export default withTranslation('userdetails')(Errors);

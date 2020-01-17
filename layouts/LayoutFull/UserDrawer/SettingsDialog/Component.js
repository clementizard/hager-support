import React, { memo } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Select from '@material-ui/core/Select';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { withTranslation } from 'Tools/i18n';
import { useSettings } from 'Services/Settings';
import { propTypes, defaultProps } from './Props';

const SettingsDialog = ({
	open,
	onClose,
	t,
}) => {
	const { onChange, data } = useSettings();
	const handleLanguageChange = (e) => {
		onChange({ lang: e.target.value });
	};

	return (
		<Dialog
			key="dialog"
			open={open}
			onClose={onClose}
			maxWidth="md"
		>
			<DialogTitle>{t('optionsBtn')}</DialogTitle>
			<DialogContent>
				<FormControl fullWidth style={{ width: 300 }}>
					<InputLabel data-cy="language-select-label">
						{t('userdrawer:settingsDialog.language')}
					</InputLabel>
					<Select
						data-cy="language-select"
						value={data.lang}
						onChange={handleLanguageChange}
					>
						<MenuItem value="en">English</MenuItem>
						<MenuItem value="fr" data-cy="language-select-value-fr">Francais</MenuItem>
						<MenuItem value="de">Deutsch</MenuItem>
					</Select>
				</FormControl>
			</DialogContent>
			<DialogActions>
				<Button
					color="primary"
					onClick={onClose}
					data-cy="settings-dialog-ok"
				>
          Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
};
SettingsDialog.propTypes = propTypes;
SettingsDialog.defaultProps = defaultProps;
SettingsDialog.whyDidYouRender = true;

export default withTranslation('userdrawer')(memo(SettingsDialog));

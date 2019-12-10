import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Select from '@material-ui/core/Select';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { useSettings } from 'Services/Settings';
import { propTypes, defaultProps } from './Props';

const SettingsDialog = ({
  open,
  onClose,
}) => {
  const { onChange, data } = useSettings();
  const handleLanguageChange = (e) => {
    onChange({ lang: e.target.value });
  };

  console.log('Settings: ', JSON.stringify(data));
  
  return (
    <Dialog
      key="dialog"
      open={open}
      onClose={onClose}
    >
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel>Lang</InputLabel>
          <Select
            value={data.lang}
            onChange={handleLanguageChange}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="fr">Francais</MenuItem>
            <MenuItem value="de">Deutsch</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
SettingsDialog.propTypes = propTypes;
SettingsDialog.defaultProps = defaultProps;
SettingsDialog.whyDidYouRender = true;

export default SettingsDialog;


import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import Search from '@material-ui/icons/Search';
// import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useList from 'react-use/lib/useList';

import { useUserState, useUserDispatch } from 'Services/User';
import {
  Container,
  Drawer,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const InstallPanel = ({
  open,
  onClose,
}) => {
  const router = useRouter();
  const { id: userId } = router.query;
  const { data, selected } = useUserState();
  const dispatch = useUserDispatch();
  const [listOpen, { updateAt, clear }] = useList([]);

  const selectedInstall = selected[userId] && selected[userId].install;
  useEffect(() => {
    if (selectedInstall !== null && data[userId]) {
      if (listOpen.length) clear();
      const installIndex = data[userId].installations.findIndex(el => el.id === selectedInstall);
      updateAt(installIndex, !listOpen[installIndex]);
    } else clear();
  }, [selectedInstall]);
  
  // No data yet
  if (!userId || !data[userId]) return <Container />;

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

  return (
    <Container>
      <Drawer open={open}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: 72,
            paddingLeft: 16,
            backgroundColor: 'var(--default-normal)'
          }}
        >
          <IconButton onClick={onClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List disablePadding>
          {data[userId].installations && data[userId].installations.map((install, installId) => (
            <Fragment key={install.id}>
              <ListItem button onClick={handleSelectInstall(install.id)}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={`${install.appCode} ${install.name}`} />
                {listOpen[installId] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={listOpen[installId]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{ paddingLeft: 32 }}>
                  {install.devices.map((device) => (
                    <ListItem button key={device.id}>
                      <ListItemText primary={device.type} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Fragment>
          ))}
        </List>
      </Drawer>
    </Container>
  );
};
InstallPanel.propTypes = propTypes;
InstallPanel.defaultProps = defaultProps;
InstallPanel.whyDidYouRender = true;

export default InstallPanel;


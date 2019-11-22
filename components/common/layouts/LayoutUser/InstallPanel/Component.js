import React, { useState } from 'react';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import {
  Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const InstallPanel = ({
  open,
  onClose,
}) => {
  const router = useRouter();
  const { id } = router.query;
  const installations = [];
  
  const [listOpen, setListOpen] = useState([]);
  const handleOpen = id => () => {
    listOpen[id] = !listOpen[id];
    setListOpen(listOpen);
  };
  
  if (!id) return <Container />;
  return (
    <Container>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton onClick={onClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List disablePadding>
          <ListItem>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <TextField variant="outlined" label="Search" fullWidth />
          </ListItem>
          <Divider />
          {installations.map((install, id) => (
            <>
              <ListItem button onClick={handleOpen(id)}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {listOpen[id] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={listOpen[id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{ paddingLeft: 32 }}>
                  <ListItem button>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
            </>
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


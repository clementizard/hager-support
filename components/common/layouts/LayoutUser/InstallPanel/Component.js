import React, { useState } from 'react';
import { useRouter } from 'next/router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import {
  Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const InstallPanel = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  
  console.log('id: ', id);
  
  if (!id) return <Container />;
  return (
    <Container>
      <List disablePadding>
        <ListItem>
          <ListItemIcon>
            <Search />
          </ListItemIcon>
          <TextField variant="outlined" label="Search" fullWidth />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button onClick={handleOpen}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding style={{ paddingLeft: 32 }}>
            <ListItem button>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Container>
  );
};
InstallPanel.propTypes = propTypes;
InstallPanel.defaultProps = defaultProps;
InstallPanel.whyDidYouRender = true;

export default InstallPanel;


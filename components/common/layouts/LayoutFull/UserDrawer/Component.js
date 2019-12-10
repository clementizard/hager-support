import React, { useState, memo } from 'react';
import Link from 'next/link';
import Dashboard from '@material-ui/icons/Dashboard';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';

import UserButtonList from './UserButtonList';
import DashboardButton from './DashboardButton';
import SettingsDialog from './SettingsDialog';
import { Container } from './Styles';
import { propTypes, defaultProps } from './Props';

const UserDrawer = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsOpen = () => setSettingsOpen(!settingsOpen);
  
  return [
    <Container key="container">
      <Link href="/">
        <DashboardButton
          title="Weather services"
          Icon={Dashboard}
        />
      </Link>
      <Link href="/user">
        <DashboardButton
          title="Add user"
          Icon={PersonAdd}
        />
      </Link>
      <UserButtonList />
      <DashboardButton
        title="Open settings"
        Icon={Settings}
        bottom
        onClick={handleSettingsOpen}
      />
    </Container>,
    <SettingsDialog
      key="dialog"
      open={settingsOpen}
      onClose={handleSettingsOpen}
    />
  ];
};
UserDrawer.propTypes = propTypes;
UserDrawer.defaultProps = defaultProps;
UserDrawer.whyDidYouRender = true;

export default memo(UserDrawer);

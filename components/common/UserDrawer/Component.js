import React from 'react';
import Link from 'next/link';
import Dashboard from '@material-ui/icons/Dashboard';
import AccountBox from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';

import {
  Container,
  DashboardIcon,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const UserDrawer = () => {
  return (
    <Container>
      <Link href="/">
        <DashboardIcon>
          <IconButton>
            <Dashboard />
          </IconButton>
        </DashboardIcon>
      </Link>
      <Link href="/user">
        <DashboardIcon>
          <IconButton>
            <AccountBox />
          </IconButton>
        </DashboardIcon>
      </Link>
    </Container>
  );
};
UserDrawer.propTypes = propTypes;
UserDrawer.defaultProps = defaultProps;
UserDrawer.whyDidYouRender = true;

export default UserDrawer;


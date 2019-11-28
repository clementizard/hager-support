import React, { useMemo } from 'react';
import Link from 'next/link';
import Dashboard from '@material-ui/icons/Dashboard';
import AccountBox from '@material-ui/icons/AccountBox';
import PersonAdd from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import { useUserState } from 'Services/User';
import {
  Container,
  DashboardIcon,
  StyledTooltip,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const UserDrawer = () => {
  const { data } = useUserState();

  const handleClose = userId => (e) => {
    e.preventDefault();
    console.log('Should close :', userId);
  };
  
  const CustomTooltip = ({ userId }) => {
    return (
      <StyledTooltip>
        {userId}
        <Button onClick={handleClose(userId)}>Fermer l'utilisateur</Button>
      </StyledTooltip>
    )
  };
  
  return useMemo(() => (
    <Container>
      <Link href="/">
        <DashboardIcon>
          <Tooltip title="Météo des services" placement="right" arrow>
            <IconButton>
              <Dashboard />
            </IconButton>
          </Tooltip>
        </DashboardIcon>
      </Link>
      <Link href="/user">
        <DashboardIcon>
          <Tooltip title="Add user" placement="right" arrow>
            <IconButton>
              <PersonAdd />
            </IconButton>
          </Tooltip>
        </DashboardIcon>
      </Link>
      {Object.keys(data).map((userId) => (
        <Link href={`/user/${userId}`} key={userId}>
          <DashboardIcon>
            <Tooltip title={<CustomTooltip userId={userId} />} placement="right" arrow interactive>
              <IconButton>
                <AccountBox />
              </IconButton>
            </Tooltip>
          </DashboardIcon>
        </Link>
      ))}
    </Container>
  ), [data]);
};
UserDrawer.propTypes = propTypes;
UserDrawer.defaultProps = defaultProps;
UserDrawer.whyDidYouRender = true;

export default UserDrawer;


import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Dashboard from '@material-ui/icons/Dashboard';
import AccountBox from '@material-ui/icons/AccountBox';
import PersonAdd from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Close from '@material-ui/icons/Close';
import Refresh from '@material-ui/icons/Refresh';

import { useUserState, useUserDispatch, getUser } from 'Services/User';
import {
  Container,
  DashboardIcon,
  StyledTooltip,
  TooltipTitle,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const UserDrawer = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, status } = useUserState();
  const dispatch = useUserDispatch();

  const DividerStyles = {
    margin: '12px 16px 3px',
    backgroundColor: 'transparent',
  };

  const handleClose = userId => (e) => {
    e.preventDefault();
    dispatch({ type: 'userDelete', payload: { userId } });
    if (id && userId === id) router.push('/user');
  };
  const handleReload = userId => (e) => {
    e.preventDefault();
    getUser(dispatch, userId);
  };

  const userStatus = status.users && status.users[id];
  const CustomTooltip = ({ title, userId }) => (
    <StyledTooltip>
      <TooltipTitle>{title}</TooltipTitle>
      <Divider variant="middle" style={DividerStyles}/>
      <Button variant="contained" onClick={handleClose(userId)}><Close />Close</Button>
      <Divider variant="middle" style={DividerStyles}/>
      <Button
        variant="contained"
        onClick={handleReload(userId)}
        disabled={userStatus === 'loading'}
      >
        <Refresh />Reload
      </Button>
    </StyledTooltip>
  );
  
  return (
    <Container>
      <Link href="/">
        <DashboardIcon>
          <Tooltip title="Weather services" placement="right">
            <IconButton>
              <Dashboard />
            </IconButton>
          </Tooltip>
        </DashboardIcon>
      </Link>
      <Link href="/user">
        <DashboardIcon>
          <Tooltip title="Add user" placement="right">
            <IconButton>
              <PersonAdd />
            </IconButton>
          </Tooltip>
        </DashboardIcon>
      </Link>
      {Object.keys(data).map(userId => (
        <Link href={`/user/${userId}`} key={userId}>
          <DashboardIcon>
            <Tooltip
              title={<CustomTooltip userId={userId} title={`${data[userId].firstname} ${data[userId].lastname}`} />}
              placement="right"
              interactive
              disableTouchListener
            >
              <IconButton>
                <AccountBox />
              </IconButton>
            </Tooltip>
          </DashboardIcon>
        </Link>
      ))}
    </Container>
  );
};
UserDrawer.propTypes = propTypes;
UserDrawer.defaultProps = defaultProps;
UserDrawer.whyDidYouRender = true;

export default UserDrawer;


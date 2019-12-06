import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Dashboard from '@material-ui/icons/Dashboard';
import AccountBox from '@material-ui/icons/AccountBox';
import PersonAdd from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { useUserState, useUserDispatch } from 'Services/User';
import {
  Container,
  DashboardIcon,
  StyledTooltip,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const UserDrawer = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useUserState();
  const dispatch = useUserDispatch();

  const DividerStyles = {
    margin: '12px 16px 3px',
  };

  const handleClose = userId => (e) => {
    e.preventDefault();
    console.log('Should close :', userId);
    dispatch({ type: 'userDelete', payload: { userId } });
    if (id && userId === id) router.push('/user');
  };
  
  const CustomTooltip = ({ title, userId }) => (
    <StyledTooltip>
      {title}
      <Divider variant="middle" style={DividerStyles}/>
      <Button variant="contained" onClick={handleClose(userId)}>Close User</Button>
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
              onClick={(e) => e.preventDefault()}
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


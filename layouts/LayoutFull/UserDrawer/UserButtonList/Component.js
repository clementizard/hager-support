import React, { memo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AccountBox from '@material-ui/icons/AccountBox';

import { useUserState, useUserDispatch, getUser } from 'Services/User';
import DashboardButton from '../DashboardButton';
import CustomTooltip from './CustomTooltip';
import { propTypes, defaultProps } from './Props';

const UserButtonList = ({
  activeUser,
}) => {
  const { data, status } = useUserState();
  const dispatch = useUserDispatch();
  const [buttons, setButtons] = useState([]);
  
  const router = useRouter();
  const { id } = router.query;
  
  const handleClose = userId => (e) => {
    e.preventDefault();
    dispatch({ type: 'userDelete', payload: { userId } });
    if (id && userId === id) router.push('/user');
  };
  const handleReload = userId => (e) => {
    e.preventDefault();
    getUser(dispatch, userId);
  };
  
  useEffect(() => {
    const out = [];

    Object.keys(data).forEach((userId) => {
      const userStatus = status.users && status.users[userId];

      out.push(
        <Link href={`/user/${userId}`} key={userId}>
          <DashboardButton
            title={
              <CustomTooltip
                userStatus={userStatus}
                title={`${data[userId].firstname} ${data[userId].lastname}`}
                handleClose={handleClose(userId)}
                handleReload={handleReload(userId)}
              />
            }
            Icon={AccountBox}
            tooltipProps={{
              interactive: true,
            }}
            active={activeUser === userId}
          />
        </Link>
      );
    });

    setButtons(out);
  }, [activeUser, Object.keys(data).length]);
  
  return buttons;
};
UserButtonList.propTypes = propTypes;
UserButtonList.defaultProps = defaultProps;
UserButtonList.whyDidYouRender = true;

export default memo(UserButtonList);


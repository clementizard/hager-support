import React, { memo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AccountBox from '@material-ui/icons/AccountBox';

import { useUserState, useUserDispatch, getUser } from 'Services/User';
import DashboardButton from '../DashboardButton';
import CustomTooltip from './CustomTooltip';
import { propTypes, defaultProps } from './Props';

const UserButtonList = () => {
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
    if (buttons.length !== Object.keys(data).length) {
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
            />
          </Link>
        );
      });
  
      setButtons(out);
    }
  });
  
  return buttons;
};
UserButtonList.propTypes = propTypes;
UserButtonList.defaultProps = defaultProps;
UserButtonList.whyDidYouRender = true;

export default memo(UserButtonList);


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

import { withTranslation } from 'Tools/i18n';
import { getLayout } from 'Layouts/LayoutUser';
import {
  useUserDispatch,
  useUserState,
  getUser,
} from 'Services/User';
import {
  Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const Empty = ({ t }) => {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const dispatch = useUserDispatch();
  const { status, data } = useUserState();
  
  console.log('Status: ', status.users[userId]);

  const loading = status.users[userId] === 'loading';
  const handleUUIDChange = ({ target: { value }}) => {
    setUserId(value);
  };
  const handleEmailChange = ({ target: { value }}) => {
    setUserEmail(value);
  };
  const handleClick = async () => {
    if (userId !== '') await getUser(dispatch, userId);
    // else if (userEmail !== '') await getUserByEmail(dispatch, userEmail);
  };
  useEffect(() => {
    if (data[userId] && Object.keys(data[userId]).length) router.push(`/user/${userId}`);
  }, [loading]);
  
  return (
    <Container>
      <TextField
        label={t('usersearch:myHagerId')}
        margin="normal"
        variant="outlined"
        autoFocus
        fullWidth
        onChange={handleUUIDChange}
        disabled={loading}
      />
      <TextField
        label={t('usersearch:email')}
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={handleEmailChange}
        disabled={loading}
      />
      <Button
        variant="contained"
        fullWidth
        size="large"
        color="primary"
        onClick={handleClick}
        disabled={loading}
      >
        <Search />
        {t('usersearch:search')}
      </Button>
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '24px',
          }}
        >
          <CircularProgress/>
        </div>
      )}
    </Container>
  );
};
Empty.propTypes = propTypes;
Empty.defaultProps = defaultProps;
Empty.whyDidYouRender = true;
Empty.getLayout = getLayout;

export default withTranslation('usersearch')(Empty);


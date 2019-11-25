import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  useUserDispatch,
  useUserState,
  getUser,
} from 'Services/User';
import {
  Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const Empty = () => {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const dispatch = useUserDispatch();
  const { status, data } = useUserState();
  
  console.log('Status: ', status.users[userId]);

  const loading = status.users[userId] === 'loading';
  const handleChange = ({ target: { value }}) => {
    setUserId(value);
  };
  const handleClick = async () => {
    await getUser(dispatch, userId);
  };
  useEffect(() => {
    if (status.users[userId] === 'success' && data[userId]) router.push(`/user/${userId}`);
  }, [loading]);
  
  return (
    <Container>
      <TextField
        label="User ID"
        margin="normal"
        variant="outlined"
        autoFocus
        fullWidth
        onChange={handleChange}
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
        Search
      </Button>
      {loading && <CircularProgress/>}
    </Container>
  );
};
Empty.propTypes = propTypes;
Empty.defaultProps = defaultProps;
Empty.whyDidYouRender = true;

export default Empty;


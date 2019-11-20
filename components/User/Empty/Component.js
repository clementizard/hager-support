import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';

import {
  Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const Empty = () => {
  const [userId, setUserId] = useState('');
  
  const handleChange = ({ target: { value }}) => {
    setUserId(value);
  };
  const handleClick = () => {
    console.log(userId);
  };
  
  return (
    <Container>
      <TextField
        label="User ID"
        margin="normal"
        variant="outlined"
        autoFocus
        fullWidth
        onChange={handleChange}
      />
      <Button variant="contained" fullWidth size="large" color="primary" onClick={handleClick}>
        <Search />
        Search
      </Button>
    </Container>
  );
};
Empty.propTypes = propTypes;
Empty.defaultProps = defaultProps;
Empty.whyDidYouRender = true;

export default Empty;


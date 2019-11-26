import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  Inner,
} from './Styles';
import { propTypes, defaultProps } from './Props';

import LayoutFull from '../LayoutFull';
import AppBar from './AppBar';
import InstallPanel from './InstallPanel';

const LayoutUser = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  
  const [open, setOpen] = useState(Boolean(id));

  const handleOpen = state => () => {
    setOpen(state);
  };
  
  return (
    <Container drawerOpen={open}>
      <AppBar drawerOpen={open} drawerDisabled={!Boolean(id)} onOpen={handleOpen(true)} />
      <InstallPanel open={open} onClose={handleOpen(false)} />
      <Inner>
        {children}
      </Inner>
    </Container>
  );
};
LayoutUser.getLayout = page => (
  <LayoutFull>{page}</LayoutFull>
);
LayoutUser.propTypes = propTypes;
LayoutUser.defaultProps = defaultProps;
LayoutUser.whyDidYouRender = true;

export default LayoutUser;


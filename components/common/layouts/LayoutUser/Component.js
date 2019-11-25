import React, { useState } from 'react';

import {
  Container,
  Inner,
} from './Styles';
import { propTypes, defaultProps } from './Props';

import LayoutFull from '../LayoutFull';
import AppBar from './AppBar';
import InstallPanel from './InstallPanel';

const LayoutUser = ({ children }) => {
  return (
    <Container>
      <AppBar />
      <InstallPanel />
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


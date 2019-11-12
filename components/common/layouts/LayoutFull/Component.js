import React, { memo } from 'react';

import UserDrawer from '../../UserDrawer';
import { Container } from './Styles';
import { propTypes, defaultProps } from './Props';

const LayoutFull = ({ children }) => {
  return (
    <>
      <UserDrawer />
      <Container>
        {children}
      </Container>
    </>
  );
};
LayoutFull.propTypes = propTypes;
LayoutFull.defaultProps = defaultProps;
LayoutFull.whyDidYouRender = true;

export default memo(LayoutFull);


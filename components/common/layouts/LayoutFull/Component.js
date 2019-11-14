import React, { memo } from 'react';

import UserDrawer from '../../UserDrawer';
import {
  Container,
  Inner,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const LayoutFull = ({ children }) => {
  return (
    <Container>
      <UserDrawer />
      <Inner>
        {children}
      </Inner>
    </Container>
  );
};
LayoutFull.propTypes = propTypes;
LayoutFull.defaultProps = defaultProps;
LayoutFull.whyDidYouRender = true;

export default memo(LayoutFull);


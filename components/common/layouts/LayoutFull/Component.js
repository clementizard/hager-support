import React, { memo } from 'react';

import { WeatherProvider } from '../../../../contexts/Weather/';
import UserDrawer from './UserDrawer';
import {
  Container,
  Inner,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const LayoutFull = ({ children }) => {
  return (
    <WeatherProvider>
      <Container>
        <UserDrawer />
        <Inner>
          {children}
        </Inner>
      </Container>
    </WeatherProvider>
  );
};
LayoutFull.propTypes = propTypes;
LayoutFull.defaultProps = defaultProps;
LayoutFull.whyDidYouRender = true;

export default memo(LayoutFull);

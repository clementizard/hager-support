import React, { memo } from 'react';

import useWindowSize from 'Tools/hooks/windowSize';
import { WeatherProvider } from 'Services/Weather';
import { UserProvider } from 'Services/User';
import UserDrawer from './UserDrawer';
import {
  Container,
  Inner,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const LayoutFull = ({ children }) => {
  
  return (
    <WeatherProvider>
      <UserProvider>
        <Container>
          <UserDrawer />
          <Inner>
            {children}
          </Inner>
        </Container>
      </UserProvider>
    </WeatherProvider>
  );
};
LayoutFull.propTypes = propTypes;
LayoutFull.defaultProps = defaultProps;
LayoutFull.whyDidYouRender = true;

export default memo(LayoutFull);

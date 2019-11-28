import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';

import useWeather from 'Services/Weather/hook';
import {
  Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';
import ChipIndicator from './ChipIndicator';

const AppBar = ({
  drawerOpen,
  drawerDisabled,
  onOpen,
}) => {
	
  const { status, data } = useWeather();

  return (
    <Container>
      {(!drawerOpen && !drawerDisabled) &&
        <div style={{ position: 'absolute', left: 16 }}>
          <IconButton onClick={onOpen}>
            <Menu />
          </IconButton>
        </div>
      }
      {status === 'success' && data.map((metric) => (
        <ChipIndicator
          key={metric.title}
          metric={metric}
        />
      ))}
    </Container>
  );
};
AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;
AppBar.whyDidYouRender = true;

export default AppBar;


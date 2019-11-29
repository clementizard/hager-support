import React from 'react';

import {
  Container,
  User,
  Errors,
  Installs,
  Devices,
  Details,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const Full = ({
  user: {
    id,
    installations,
  },
  selectedInstall,
  selectedDevice,
}) => {
  // const devices = installations[selectedInstall].devices;
  
  
  return (
    <Container>
      <User>{id}</User>
      <Errors />
      <Installs>
        {installations.map((install) => (
          <div>
            {install.id}
          </div>
        ))}
      </Installs>
      <Devices />
      <Details />
    </Container>
  );
};
Full.propTypes = propTypes;
Full.defaultProps = defaultProps;
Full.whyDidYouRender = true;

export default Full;


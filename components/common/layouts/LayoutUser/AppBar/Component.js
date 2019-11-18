import React from 'react';

import {
  Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';

import ChipIndicator from './ChipIndicator';

const AppBar = () => {
  const metrics = [{
    title: 'Domovea - Cloud service',
    description: 'Description',
    services: [
      {
        status: 'on',
        name: 'Prepare my installation',
        functions: [
          'Create end-user account',
          'Finalize Handover',
        ],
      },
      {
        status: 'off',
        name: 'Control my installation through apps',
        functions: [
          'Domovea client app available on Apple store',
          'Domovea client app available on Google play',
        ],
      },
      {
        status: 'off',
        name: 'Manage my installation',
        functions: [
          'Invite restricted user',
          'List all my installation from end user account',
        ],
      },
      {
        status: 'on',
        name: 'Manage my installation2',
        functions: [
          'Function 1',
          'Function 2',
        ],
      },
    ],
  }];
  metrics.forEach((metric) => {
    metric.onServices = [];
    metric.offServices = [];
    metric.services.forEach((service) => {
      if (service.status === 'off') metric.offServices.push(service);
      else metric.onServices.push(service);
    });
    metric.status = {
      ok: !metric.offServices.length,
      valid: metric.onServices.length,
      total: metric.onServices.length + metric.offServices.length,
    };
  });
  
  return (
    <Container>
      {metrics.map((metric) => (
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


import React from 'react';
import Chip from '@material-ui/core/Chip';

import {
  Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';

const ChipIndicator = ({
  onClick,
  metric: {
    status,
    title: label,
  },
}) => {
  const ok = status === 'ok';

  return ([
    <Container error={!ok} key="container">
      <Chip label={label} onClick={onClick} />
    </Container>,
  ]);
};
ChipIndicator.propTypes = propTypes;
ChipIndicator.defaultProps = defaultProps;
ChipIndicator.whyDidYouRender = true;

export default ChipIndicator;


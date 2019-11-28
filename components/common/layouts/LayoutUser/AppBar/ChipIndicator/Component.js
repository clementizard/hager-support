import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';

import {
  Container,
} from './Styles';
import { propTypes, defaultProps } from './Props';
import Card from '../../../../../Dashboard/Card';

const ChipIndicator = ({
  metric: {
    status,
    onServices,
    offServices: services,
    title: label,
    description,
  },
}) => {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const ok = status === 'ok';

  return ([
    <Container error={!ok} key="container">
      <Chip label={label} onClick={!ok ? handleOpen : undefined} />
    </Container>,
    <Dialog
      key="dialog"
      open={open}
      onClose={handleClose}
      fullWidth
    >
      <Card
        onServices={onServices}
        offServices={services}
        title={label}
        description={description}
        status={status}
      />
    </Dialog>
  ]);
};
ChipIndicator.propTypes = propTypes;
ChipIndicator.defaultProps = defaultProps;
ChipIndicator.whyDidYouRender = true;

export default ChipIndicator;


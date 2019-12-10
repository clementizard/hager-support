import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';
import Refresh from '@material-ui/icons/Refresh';

import { propTypes, defaultProps } from './Props';
import { StyledTooltip, TooltipTitle } from './Styles';

const Component = ({
  title,
  handleClose,
  handleReload,
  userStatus,
}) => {
  const DividerStyles = {
    margin: '12px 16px 3px',
    backgroundColor: 'transparent',
  };

  return (
    <StyledTooltip>
      <TooltipTitle>{title}</TooltipTitle>
      <Divider variant="middle" style={DividerStyles}/>
      <Button variant="contained" onClick={handleClose}><Close />Close</Button>
      <Divider variant="middle" style={DividerStyles}/>
      <Button
        variant="contained"
        onClick={handleReload}
        disabled={userStatus === 'loading'}
      >
        <Refresh />Reload
      </Button>
    </StyledTooltip>
  );
};
Component.propTypes = propTypes;
Component.defaultProps = defaultProps;
Component.whyDidYouRender = true;

export default Component;


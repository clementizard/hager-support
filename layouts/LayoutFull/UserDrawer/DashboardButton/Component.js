import React, { memo } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import { Container } from './Styles';
import { propTypes, defaultProps } from './Props';

const DashboardButton = ({
	title,
	Icon,
	bottom,
	onClick,
	tooltipProps,
	active,
	...props
}) => (
	<Container bottom={bottom} active={active} {...props}>
		<Tooltip
			title={title}
			placement="right"
			{...tooltipProps}
		>
			<IconButton onClick={onClick}>
				<Icon />
			</IconButton>
		</Tooltip>
	</Container>
);
DashboardButton.propTypes = propTypes;
DashboardButton.defaultProps = defaultProps;
DashboardButton.whyDidYouRender = true;

export default memo(DashboardButton);

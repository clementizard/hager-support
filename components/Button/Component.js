import React, { memo } from 'react';
import MuiButton from '@material-ui/core/Button';

import Container from './Styles';
import { propTypes, defaultProps } from './Props';

const Button = ({
	colors: {
		background: colorBackground,
		label: colorLabel,
	},
	font: {
		weight,
	},
	containerStyle,
	label,
	...props
}) => (
	<Container
		background={colorBackground}
		label={colorLabel}
		weight={weight}
		style={containerStyle}
	>
		<MuiButton
			{...props}
		>
			{label}
		</MuiButton>
	</Container>
);
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.whyDidYouRender = true;

export default memo(Button);

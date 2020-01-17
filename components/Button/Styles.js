import React from 'react';
import styled from 'styled-components';

export default styled(({
	background, label, weight, ...props
}) => <div {...props} />)`
	> button {
		font-weight: ${({ weight }) => weight};
		color: ${({ label }) => label};
		background-color: ${({ background }) => background};
	}
`;

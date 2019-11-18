import React from 'react';
import styled from 'styled-components';

export const Container = styled(({ error, ...props }) => <div {...props} />)`
	margin: 0 16px;
	> div {
		background-color: ${({ error }) => error ? 'var(--error-normal)' : 'var(--default-dark)'};
		color: white;
		&:focus {
			background-color: ${({ error }) => error ? 'var(--error-normal)' : 'var(--default-dark)'};
		}
	}
`;

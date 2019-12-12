import styled from 'styled-components';

export const Container = styled(({ background, label, weight, ...props }) => <div {...props} />)`
	> button {
		font-weight: ${({ weight }) => weight};
		color: ${({ label }) => label};
		background-color: ${({ background }) => background};
	}
`;

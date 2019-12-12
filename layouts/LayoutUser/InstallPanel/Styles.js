import styled from 'styled-components';

export const Container = styled.div`
	grid-area: panel;
	width: 100%;
	height: 100%;
`;

export const Drawer = styled(({ open, ...props }) => <div {...props} />)`
	width: 300px;
	height: 100%;
	transition: width 250ms ease-in;
	position: absolute;
	left: ${({ open }) => open ? 0 : -300}px;
	box-shadow: ${({ open }) => open ? '0 3px 6px rgba(0, 0, 0, 0.55)' : 'none'};
`;

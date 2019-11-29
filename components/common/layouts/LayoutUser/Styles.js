import styled from 'styled-components';

export const Container = styled(({ drawerOpen, detailsOpen, ...props }) => <div {...props} />)`
	position: absolute;
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: ${({ drawerOpen }) => drawerOpen ? 'minMax(auto, 300px) auto' : '0px auto'};
	grid-template-rows: ${({ detailsOpen }) => detailsOpen ? '450px auto' : '72px auto'};
	grid-template-areas:
		"panel bar"
		"panel inner";
`;
export const Inner = styled.div`
	grid-area: inner;
	overflow: auto;
`;

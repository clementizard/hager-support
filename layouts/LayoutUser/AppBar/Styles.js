import styled from 'styled-components';

export const Container = styled(({ open, ...props }) => <div {...props} />)`
	grid-area: bar;
	// height: ${({ open }) => open ? 450 : 72}px;
	display: grid;
	grid-template-rows: 72px ${({ open }) => open ? '378px' : '0px'};
	grid-template-columns: 1fr;
	grid-template-areas:
		"appBar"
		"details";
	box-shadow: 0 6px 6px -6px rgba(0,0,0,0.5);
	z-index: 1;
	background-color: var(--default-normal);
`;
export const Bar = styled.div`
	grid-area: appBar;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
export const DetailsContainer = styled.div`
	grid-area: details;
	width: 100%;
	height: auto;
	border-left: solid 1px #e0e0e0;
`;
export const DetailsInner = styled(({ open, ...props }) => <div {...props} />)`
	display: ${({ open }) => open ? 'inherit' : 'none'};
	position: relative;
	height: ${({ open }) => open ? 'auto' : '0px'};
	margin: 24px auto;
	max-width: 550px;
`;

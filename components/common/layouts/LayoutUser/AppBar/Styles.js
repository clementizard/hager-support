import styled from 'styled-components';

export const Container = styled.div`
	grid-area: bar;
	width: calc(100vw - 72px);
	height: 100%;
	display: flex;
	align-items: center;
	background-color: var(--default-normal);
	justify-content: flex-end;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

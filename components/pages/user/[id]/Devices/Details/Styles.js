import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	padding: 16px 0;
	background-color: var(--default-normal);
	box-shadow: inset 0 3px 6px -6px rgba(0, 0, 0, 1);
`;
export const Inner = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	max-width: 50vw;
	grid-gap: 16px;
	grid-template-areas:
		"table table"
		"graph graph";
`;
export const Title = styled.div`
	font-size: 1.1rem;
	font-weight: 600;
	padding-left: 16px;
`;
export const Content = styled.div`
	padding-left: 16px;
`;

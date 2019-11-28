import styled from 'styled-components';

export const Container = styled.div`
	padding: 24px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, auto);
	grid-column-gap: 24px;
	grid-row-gap: 24px;
`;

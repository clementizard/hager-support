import styled from 'styled-components';

export default styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, auto);
	grid-template-areas:
		"user errors"
		"installs installs"
		"devices devices";
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	height: 100%;
	min-height: 100vh;
	margin: 16px;
`;

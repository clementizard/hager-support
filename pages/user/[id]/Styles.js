import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, auto);
	grid-template-areas:
		"user errors"
		"installs installs"
		"devices devices"
		"details details";
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	height: 100%;
	min-height: 100vh;
	margin: 16px;
`;
export const User = styled(Paper)`
	grid-area: user;
`;
export const Errors = styled(Paper)`
	grid-area: errors;
`;
export const Installs = styled(Paper)`
	grid-area: installs;
	height: fit-content;
`;
export const Devices = styled(Paper)`
	grid-area: devices;
	height: fit-content;
`;
export const Details = styled(Paper)`
	grid-area: details;
`;
export const Title = styled.div`
	display: flex;
	align-items: center;
	min-height: 64px;
	padding-left: 24px;
	font-size: 1.25rem;
`;

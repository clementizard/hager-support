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
export const DetailsContainer = styled.div`
	position: relative;
	padding: 16px 0;
	background-color: var(--default-normal);
	box-shadow: inset 0 3px 6px -6px rgba(0, 0, 0, 1);
`;
export const DetailsInner = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	max-width: 50vw;
	grid-gap: 16px;
`;
export const DetailsTitle = styled.div`
	font-size: 1.1rem;
	font-weight: 600;
	padding-left: 16px;
`;
export const DetailsContent = styled.div`
	padding-left: 16px;
`;
export const UserInfos = styled.div`
	display: grid;
	grid-gap: 15px;
	grid-template-columns: 1fr 4fr;
	padding: 8px 26px 26px;
`;
export const UserInfoTitle = styled.div`
	font-size: 1.05rem;
	font-weight: 600;
`;
export const UserInfo = styled.div`
`;

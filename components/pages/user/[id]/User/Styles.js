import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Container = styled(Paper)`
	grid-area: user;
`;
export const Infos = styled.div`
	display: grid;
	grid-gap: 15px;
	grid-template-columns: 1fr 4fr;
	padding: 8px 26px 26px;
`;
export const InfoTitle = styled.div`
	font-size: 1.05rem;
	font-weight: 600;
`;
export const Info = styled.div`
`;
export const Title = styled.div`
	display: flex;
	align-items: center;
	min-height: 64px;
	padding-left: 24px;
	font-size: 1.25rem;
`;

import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

export const Container = styled(Paper)`
	position: relative;
	height: 100%;
	min-width: 400px;
	max-width: 600px;
	font-weight: 500;
	padding: 16px;
	overflow: auto;
`;
export const Title = styled.div`
	font-size: 32px;
	font-weight: 600;
	color: #3c3c3c;
`;
export const Subtitle = styled.div`
	font-size: 24px;
	color: #4c4c4c;
`;
export const Status = styled(({ error, ...props }) => <div {...props} />)`
	position: absolute;
	color: ${({ error }) => error ? 'red' : '#3c3c3c'};
	top: 16px;
	right: 16px;
	font-size: 32px;
`;
export const Service = styled(({ error, ...props }) => <div {...props} />)`
	color: #4c4c4c;
	font-size: 18px;
`;
export const Function = styled.div`
	color: red;
	font-size: 16px;
`;

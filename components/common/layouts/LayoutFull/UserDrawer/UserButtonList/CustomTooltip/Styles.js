import styled from 'styled-components';

export const StyledTooltip = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 20px;
	width: 144px;
	margin: 8px;
	padding: 4px;
	white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TooltipTitle = styled.div`
	margin: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 4px 0;
`;

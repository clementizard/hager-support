import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	width: 72px;
	height: 100vh;
	left: 0;
	top: 0;
	background-color: var(--default-normal);
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 1;
`;

export const DashboardIcon = styled.div`
  position: relative;
	height: 72px;
  line-height: 72px;
`;
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

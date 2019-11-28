import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

export const ExtendBtn = styled(({ rotate, ...props }) => <div {...props} />)`
	position: absolute;
	top: 12px;
	right: 12px;
	transform: rotate(${({ rotate }) => rotate ? 180 : 0}deg);
	z-index: 2;
`;
export const PageTitle = styled.div`
	font-size: 48px;
	color: var(--text-primary-color);
	margin: 24px 0 0 48px;
`;
export const Container = styled(Paper)`
	position: relative;
	min-width: 400px;
	font-weight: 500;
	padding: 16px;
	overflow: auto;
	max-height: 215px;
`;
export const Title = styled(({ margin, ...props }) => <div {...props} />)`
	position: relative;
	font-size: 32px;
	font-weight: 600;
	color: var(--text-primary-color);
	padding-left: 24px;
	margin-bottom: ${({ margin }) => margin ? 16 : 0}px;
`;
export const Status = styled(({ value, small, ...props }) => <div {...props} />)`
	position: absolute;
	width: ${({ small }) => small ? 8 : 16}px;
	height: ${({ small }) => small ? 8 : 16}px;
	top: 50%;
	left: 6px;
	transform: translate(-50%, -50%);
	border-radius: 50px;
	background-color: var(--status-${({ value }) => value === 'ok' ? 'success' : (value === 'warn' ? 'warning' : 'error')}-foreground);
`;
export const Service = styled.div`
	position: relative;
	color: var(--text-secondary-color);
	font-size: 20px;
	font-weight: 600;
	margin: 8px 0;
	padding-left: 16px;
`;
export const Function = styled.div`
	color: var(--status-error-foreground);
	font-size: 16px;
	margin: 4px 0;
	padding-left: 32px;
`;

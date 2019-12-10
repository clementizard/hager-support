import React from 'react';
import styled from 'styled-components';

export const Container = styled(({ bottom, ...props }) => <div {...props} />)`
  position: ${({ bottom }) => bottom ? 'absolute' : 'relative'};
	height: 72px;
  line-height: 72px;
  ${({ bottom }) => bottom && `
    bottom: 0px;
  `}
`;

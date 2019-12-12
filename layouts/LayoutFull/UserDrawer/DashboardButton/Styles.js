import React from 'react';
import styled from 'styled-components';

export const Container = styled(({ bottom, active, ...props }) => <div {...props} />)`
  position: ${({ bottom }) => bottom ? 'absolute' : 'relative'};
	height: 72px;
  line-height: 72px;
  ${({ bottom }) => bottom && `
    bottom: 0px;
  `}
  ${({ active }) => active && `
    & > button {
      color: white !important;
    }
    &::before {
      content: ' ';
      position: absolute;
      top: 0;
      left: -12px;
      width: 72px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.54);
    }
  `}
`;

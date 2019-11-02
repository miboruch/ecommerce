import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

const StyledOuterSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledInnerSpinner = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border-top: 2px double #725a5a;
  border-bottom: 2px double transparent;
  border-left: 2px double transparent;
  border-right: 2px double transparent;
  position: relative;
  animation: ${rotate} 3s linear infinite forwards;

  ::before,
  ::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border-top: 2px double inherit;
    border-bottom: 2px double transparent;
    border-left: 2px double transparent;
    border-right: 2px double transparent;
  }

  ::before {
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    border-top: 2px double #171616;
    animation: ${rotate} 2s linear infinite forwards;
  }

  ::after {
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    border-top: 2px double #8b8383;
    animation: ${rotate} 1.2s linear infinite forwards;
  }
`;

const Spinner = () => (
  <StyledOuterSpinner>
    <StyledInnerSpinner />
  </StyledOuterSpinner>
);

export default Spinner;

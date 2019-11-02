import React from 'react';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';

const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.background};
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(${({ isLoading }) => (isLoading ? '0%' : '-100%')});
  //transition: transform 0.5s 0.3s ease;
  z-index: 9999;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  visibility: ${({ isLoading }) => (isLoading ? 'visible' : 'hidden')};
  transition: opacity 1s 3s ease, visibility 1s 3s ease, transform 0.5s 0.3s ease;
`;

const Loader = ({ isLoading }) => {
  return (
    <StyledLoader isLoading={isLoading}>
      <Spinner />
    </StyledLoader>
  );
};

export default Loader;

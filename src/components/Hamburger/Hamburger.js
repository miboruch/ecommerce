import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  z-index: 500;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  margin: 0 0.5rem;
`;

const InnerHamburger = styled.div`
  width: 28px;
  height: 1px;
  position: relative;
  background: #000;

  ::before,
  ::after {
    content: '';
    width: 28px;
    height: 1px;
    background: #000;
    position: absolute;
    left: 0;
  }

  ::before {
    top: -6px;
  }

  ::after {
    top: 6px;
  }
`;

const Hamburger = () => {
  return (
    <StyledHamburger>
      <InnerHamburger />
    </StyledHamburger>
  );
};

export default Hamburger;

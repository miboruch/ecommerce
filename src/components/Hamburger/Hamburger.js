import React, { useContext } from 'react';
import styled from 'styled-components';

import { MenuContext } from '../../contexts/MenuContext';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  z-index: 900;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  margin: 0 0.5rem;

  :focus {
    outline: none;
  }
`;

const InnerHamburger = styled.div`
  width: 28px;
  height: 1px;
  position: relative;
  background: ${({ isOpen }) => (isOpen ? 'transparent' : '#000')};
  transition: background 0.4s ease;

  ::before,
  ::after {
    content: '';
    width: 28px;
    height: 1px;
    background: #000;
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
  }

  ::before {
    top: ${({ isOpen }) => (isOpen ? '0' : '-6px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '43deg' : '0')});
  }

  ::after {
    top: ${({ isOpen }) => (isOpen ? '0' : '6px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '-43deg' : '0')});
  }
`;

const Hamburger = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);

  return (
    <StyledHamburger onClick={toggleMenu}>
      <InnerHamburger isOpen={isOpen} />
    </StyledHamburger>
  );
};

export default Hamburger;

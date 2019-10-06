import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import svgIcon from '../../assets/images/cart.svg';

import Hamburger from '../Hamburger/Hamburger';

const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid #f1e2e2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
`;

const StyledLogo = styled.p`
  color: #bca4a4;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 3px;
`;

const StyledCartIcon = styled(ReactSVG)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin: 0 0.5rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Hamburger />
      <StyledLogo>INDEED INC.</StyledLogo>
      <StyledCartIcon src={svgIcon}/>
    </StyledHeader>
  );
};

export default Header;

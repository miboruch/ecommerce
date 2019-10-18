import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import svgIcon from '../../../assets/images/cart.svg';
import { Link } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Hamburger from '../../atoms/Hamburger/Hamburger';

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

const StyledParagraph = styled(Paragraph)`
  position: absolute;
  top: 50%;
  right: 70px;
  padding: 0;
  margin: 0;
  transform: translateY(-50%);
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
  margin: 0 1.6rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Hamburger />
      <Link to='/'>
        <StyledLogo>INDEED INC.</StyledLogo>
      </Link>
      <Link to='/login'>
        <StyledParagraph small>log in</StyledParagraph>
      </Link>
      <Link to='/cart'>
        <StyledCartIcon src={svgIcon} />
      </Link>
    </StyledHeader>
  );
};

export default Header;

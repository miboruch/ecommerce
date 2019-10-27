import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import { connect } from 'react-redux';
import svgCartIcon from '../../../assets/images/cart.svg';
import svgUserIcon from '../../../assets/images/user.svg';
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
  background: ${({ theme }) => theme.color.background};
  border: 1px solid #f1e2e2;
  left: 50%;
  bottom: -20px;
  padding: 0 3rem;
  margin: 0;
  transform: translate(-50%, -50%);
`;

const StyledLogo = styled.p`
  color: #bca4a4;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 3px;
`;

const StyledMailParagraph = styled(Paragraph)`
  position: absolute;
  top: 50%;
  right: 90px;
  transform: translateY(-50%);
  display: none;
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const StyledIcon = styled(ReactSVG)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin: 0 1.6rem;
  fill: ${({ theme }) => theme.color.secondFont};
  transition: all 0.5s ease;

  :hover {
    fill: ${({ theme }) => theme.color.impact};
  }
`;

const StyledUserIcon = styled(StyledIcon)`
  right: 35px;
`;

const StyledMailBox = styled.div`
  display: block;

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const Header = ({ isLoggedIn, email }) => {
  return (
    <StyledHeader>
      <Hamburger />
      <Link to='/'>
        <StyledLogo>INDEED INC.</StyledLogo>
      </Link>
      <StyledMailParagraph small>{email}</StyledMailParagraph>
      <Link to={isLoggedIn ? '/account' : '/login'}>
        <StyledUserIcon src={svgUserIcon} />
      </Link>
      <Link to='/cart'>
        <StyledIcon src={svgCartIcon} />
      </Link>
      <StyledMailBox>
        {isLoggedIn ? (
          <StyledParagraph>{email}</StyledParagraph>
        ) : (
          <StyledParagraph>login</StyledParagraph>
        )}
      </StyledMailBox>
    </StyledHeader>
  );
};

const mapStateToProps = ({ authReducer: { isLoggedIn, email } }) => {
  return { isLoggedIn, email };
};

export default connect(mapStateToProps)(Header);

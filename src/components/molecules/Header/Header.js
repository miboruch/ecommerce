import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactSVG from 'react-svg';
import svgIcon from '../../../assets/images/cart.svg';
import { Link } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Hamburger from '../../atoms/Hamburger/Hamburger';
import { authLogout } from '../../../actions/authAction';

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
  right: 50px;
  padding: 0;
  margin: 0;
  transform: translateY(-50%);
  display: none;

  ${({ theme }) => theme.mq.mobile} {
    display: block;
  }
`;

const StyledLinkParagraph = styled(StyledParagraph)`
  cursor: pointer;
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

const Header = ({ isLoggedIn, logoutUser, history }) => {
  return (
    <StyledHeader>
      <Hamburger />
      <Link to='/'>
        <StyledLogo>INDEED INC.</StyledLogo>
      </Link>
      {isLoggedIn ? (
        <StyledLinkParagraph
          small
          onClick={() => {
            history.push('/');
            logoutUser();
          }}
        >
          logout
        </StyledLinkParagraph>
      ) : (
        <Link to='/login'>
          <StyledParagraph small>login</StyledParagraph>
        </Link>
      )}
      <Link to='/cart'>
        <StyledCartIcon src={svgIcon} />
      </Link>
    </StyledHeader>
  );
};

const mapStateToProps = ({ authReducer: { isLoggedIn } }) => {
  return { isLoggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(authLogout())
  };
};

const HeaderWithRouter = withRouter(Header);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWithRouter);

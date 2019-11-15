import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTrail, animated } from 'react-spring';
import background from '../../../assets/images/menuBackground.jpg';
import { MenuContext } from '../../../contexts/MenuContext';
import { createFadeIn } from '../../animations/animations';
import Button from '../../atoms/Button/Button';
import { logoutUser } from '../../../actions/authAction';

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 1s ease;
  z-index: 499;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 499;

  ${({ theme }) => theme.mq.standard} {
    width: 30%;
  }
`;

const StyledList = styled.ul`
  width: auto;
  position: relative;
  margin-left: 4rem;
  list-style-type: none;
  padding: 0 0 4rem 0;
  display: flex;
  flex-direction: column;
`;

const ListBorder = styled.div`
  width: 50%;
  height: 1px;
  background: ${({ theme }) => theme.color.background};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledListItem = styled(animated.li)`
  color: ${({ theme }) => theme.color.secondFont};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 1.2rem 0;
  letter-spacing: 4px;
  z-index: 6;

  ${({ theme }) => theme.mq.mobile} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledStripe = styled.div`
  width: 1px;
  height: ${({ isOpen }) => (isOpen ? '100vh' : '1vh')};
  background: ${({ theme }) => theme.color.secondFont};
  position: absolute;
  top: 0;
  left: 2rem;
  z-index: 5;
  transition: height 3s 1s ease;
`;

const SideWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
    position: fixed;
    top: 0;
    left: 30%;
    width: 70%;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
    transition: transform 1.2s 1.4s ease-in-out;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    z-index: 488;
  }
`;

const StyledButton = styled(animated(Button))`
  position: absolute;
  bottom: -78px;
`;

const Menu = ({ isLoggedIn, logout, history }) => {
  const { isOpen, menuItems, toggleMenu } = useContext(MenuContext);
  const buttonSlide = createFadeIn(1000, 1700)();

  const menuTrail = useTrail(menuItems.length, {
    opacity: isOpen ? 1 : 0,
    transform: `translateX(${isOpen ? '0' : '-30px'})`,
    from: { opacity: 0, transform: 'translateX(-30px)' },
    delay: 700
  });

  return (
    <MainWrapper isOpen={isOpen}>
      <StyledWrapper isOpen={isOpen}>
        <StyledList>
          {menuTrail.map((props, index) => (
            <Link to={menuItems[index].url} key={menuItems[index].id}>
              <StyledListItem style={props}>{menuItems[index].title}</StyledListItem>
            </Link>
          ))}
          <ListBorder />
          {isLoggedIn ? (
            <StyledButton
              style={buttonSlide}
              onClick={
                history.location.pathname === '/'
                  ? () => {
                      logout(history);
                      toggleMenu();
                    }
                  : () => logout(history)
              }
            >
              log out
            </StyledButton>
          ) : (
            <Link to='/login'>
              <StyledButton style={buttonSlide}>log in</StyledButton>
            </Link>
          )}
        </StyledList>
        <StyledStripe isOpen={isOpen} />
      </StyledWrapper>
      <SideWrapper isOpen={isOpen} />
    </MainWrapper>
  );
};

const mapStateToProps = ({ authReducer: { isLoggedIn } }) => {
  return { isLoggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: history => dispatch(logoutUser(history))
  };
};

const MenuWithRouter = withRouter(Menu);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuWithRouter);

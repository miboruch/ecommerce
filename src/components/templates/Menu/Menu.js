import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTrail, animated } from 'react-spring';

import { MenuContext } from '../../../contexts/MenuContext';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  background: #fff;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 1s ease;
  z-index: 499;

  ${({ theme }) => theme.mq.standard} {
    width: 30%;
  }

  ::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 100vh;
    background: ${({ theme }) => theme.mq.impact};
  }
`;

const StyledList = styled.ul`
  width: auto;
  margin-left: 4rem;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
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
  background: ${({ theme }) => theme.color.impact};
  position: absolute;
  top: 0;
  left: 2rem;
  z-index: 5;
  transition: height 3s 1s ease;
`;

const SecondStripe = styled(StyledStripe)`
  left: 100%;
  transition: height 3s 2s ease;
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const Menu = () => {
  const { isOpen, menuItems } = useContext(MenuContext);

  const menuTrail = useTrail(menuItems.length, {
    opacity: isOpen ? 1 : 0,
    transform: `translateX(${isOpen ? '0' : '-30px'})`,
    from: { opacity: 0, transform: 'translateX(-30px)' },
    delay: 700
  });

  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledList>
        {menuTrail.map((props, index) => (
          <Link to={menuItems[index].url} key={menuItems[index].id}>
            <StyledListItem style={props}>{menuItems[index].title}</StyledListItem>
          </Link>
        ))}
      </StyledList>
      <StyledStripe isOpen={isOpen} />
      <SecondStripe isOpen={isOpen} />
    </StyledWrapper>
  );
};

export default Menu;

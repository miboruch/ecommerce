import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

const StyledList = styled.ul`
  width: 50%;
  margin-left: 2rem;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled.li`
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
  height: ${({ isOpen }) => (isOpen ? '100vh' : '1vh')}; /* or react spring */
  background: ${({ theme }) => theme.color.background};
  position: absolute;
  top: 0;
  margin-left: 2rem;
  z-index: 5;
  transition: height 3s 1s ease;
`;

const SecondStripe = styled(StyledStripe)`
  margin-left: 1rem;
  transition: height 3s 2s ease;
`;

const Menu = () => {
  const { isOpen, menuItems } = useContext(MenuContext);

  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledList>
        {menuItems.map(item => (
          <StyledListItem key={item.id} as={Link} to={item.url}>
            {item.title}
          </StyledListItem>
        ))}
      </StyledList>
      <StyledStripe isOpen={isOpen} />
      <SecondStripe isOpen={isOpen} />
    </StyledWrapper>
  );
};

export default Menu;

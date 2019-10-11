import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MenuContext } from '../../../contexts/MenuContext';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.footer`
  width: 100%;
  height: 90vh;
  margin-top: 2rem;
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledContactInfo = styled(Paragraph)`
  color: ${({ theme }) => theme.color.footerFont};
  text-align: center;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.color.font};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 1rem 0;
  letter-spacing: 2px;
  text-align: center;
`;

const ContactFooter = () => {
  const { menuItems } = useContext(MenuContext);

  return (
    <StyledWrapper>
      <StyledContactInfo>
        (323) 638-2296 <br />
        5723 Morgan Ave <br />
        Los Angeles, California(CA), 90011
      </StyledContactInfo>
      <StyledList>
        {menuItems.map(item => (
          <Link key={item.id} to={item.url}>
            <StyledListItem>{item.title}</StyledListItem>
          </Link>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default ContactFooter;

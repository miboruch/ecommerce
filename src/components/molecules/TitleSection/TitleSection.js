import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  height: 220px;
  background: white;
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.color.background};
`;

const StyledSideSection = styled.section`
  width: 50%; /* Animation from 0% to 50% -> slide from right */
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.color.background};
`;

const StyledTitle = styled.h1`
  font-weight: normal;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.secondFont};
  letter-spacing: 4px;
  margin: 0;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const TitleSection = ({ children }) => {
  return (
    <StyledSection>
      <StyledSideSection />
      <StyledTitle>{children}</StyledTitle>
    </StyledSection>
  );
};

export default TitleSection;

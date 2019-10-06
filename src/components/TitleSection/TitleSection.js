import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  height: 300px;
  background: white;
`;

const StyledSideSection = styled.section`
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.color.background};
`;

const TitleSection = () => {
  return (
    <StyledSection>
      <StyledSideSection />
    </StyledSection>
  );
};

export default TitleSection;

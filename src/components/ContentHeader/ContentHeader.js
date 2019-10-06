import React from 'react';
import styled from 'styled-components';

import image from '../../assets/images/hero.jpeg';

const StyledWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 64px);
  background: ${({ theme }) => theme.color.background};
  position: relative;
`;

const StyledParagraph = styled.p`
  width: 65%;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.secondFont};
  margin: 0;
  padding: 2rem;
`;

const StyledImage = styled.img`
  width: 70%;
  position: absolute;
  object-fit: cover;
  bottom: 100px;
  right: 0;
`;

const ContentHeader = () => {
  return (
    <StyledWrapper>
      <StyledParagraph>
        If we plant the right seeds, tomorrow will be better. <br /> If you put
        out good things, then you'll get good things back.
      </StyledParagraph>
      <StyledImage src={image} />
    </StyledWrapper>
  );
};

export default ContentHeader;

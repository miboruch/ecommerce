import React from 'react';
import styled from 'styled-components';

import image from '../../../assets/images/hero.jpeg';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 64px);
  background: ${({ theme }) => theme.color.background};
  position: relative;
`;

const StyledParagraph = styled(Paragraph)`
  width: 85%;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.secondFont};
  margin: 0;
`;

const StyledImage = styled.img`
  width: 290px;
  height: 392px;
  position: absolute;
  object-fit: cover;
  bottom: 60px;
  right: 0;
`;

const ContentHeader = () => {
  return (
    <StyledWrapper>
      <StyledParagraph>
        If we plant the right seeds, tomorrow will be better. <br /> If you put out good things,
        then you'll get good things back.
      </StyledParagraph>
      <StyledImage src={image} />
    </StyledWrapper>
  );
};

export default ContentHeader;

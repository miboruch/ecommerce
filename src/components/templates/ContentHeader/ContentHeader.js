import React from 'react';
import styled from 'styled-components';

import image from '../../../assets/images/hero.jpg';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 64px);
  background: ${({ theme }) => theme.color.background};
  position: relative;
`;

const StyledParagraph = styled(Paragraph)`
  width: 85%;
  color: ${({ theme }) => theme.color.secondFont};
  margin: 0;

  ${({ theme }) => theme.mq.mobile} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 50vh;
  position: absolute;
  object-fit: cover;
  bottom: 80px;
  right: 0;
  border: 1px solid #ccc;
  border-right: none;

  ${({ theme }) => theme.mq.tablet} {
    width: 90%;
    height: 70vh;
  }

  ${({ theme }) => theme.mq.standard} {
    width: 80%;
    bottom: 40px;
  }
`;

const ContentHeader = () => {
  return (
    <StyledWrapper>
      <StyledParagraph medium>
        If we plant the right seeds, tomorrow will be better. <br /> If you put out good things,
        then you'll get good things back.
      </StyledParagraph>
      <StyledImage src={image} />
    </StyledWrapper>
  );
};

export default ContentHeader;

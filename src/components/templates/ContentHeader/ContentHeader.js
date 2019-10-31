import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { createFadeIn, createSlideFadeIn } from '../../animations/animations';

import image from '../../../assets/images/hero.jpg';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 64px);
  background: ${({ theme }) => theme.color.background};
  position: relative;
  overflow: hidden;
`;

const StyledParagraph = styled(animated(Paragraph))`
  width: 85%;
  color: ${({ theme }) => theme.color.secondFont};
  margin: 0;
  padding-top: 4rem;

  ${({ theme }) => theme.mq.mobile} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledImage = styled(animated.img)`
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
  const fadeIn = createFadeIn(1000, 1000)();
  const imageEffect = createSlideFadeIn(2500, 1700, { right: '-30px' }, { right: '0' })();
  return (
    <StyledWrapper>
      <StyledParagraph style={fadeIn} medium>
        If we plant the right seeds, tomorrow will be better. <br /> If you put out good things,
        then you'll get good things back.
      </StyledParagraph>
      <StyledImage src={image} style={imageEffect} />
    </StyledWrapper>
  );
};

export default ContentHeader;

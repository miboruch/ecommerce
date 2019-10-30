import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { createSlideOpacity } from '../../animations/animations';
import { createBackgroundSlide } from '../../animations/animations';

const StyledSection = styled.section`
  width: 100%;
  height: 220px;
  background: white;
  position: relative;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background ${({ theme }) => theme.color.background};
  }
`;

const StyledSideSection = styled(animated.section)`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.color.background};
`;

const StyledTitle = styled(animated.h1)`
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
  font-size: ${({ theme }) => theme.fontSize.s};

  ${({ theme }) => theme.mq.mobile} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  ${({ theme }) => theme.mq.standard} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const TitleSection = ({ children }) => {
  const backgroundSlide = createBackgroundSlide(2000, 1000)();
  const titleSlide = createSlideOpacity(1000, 2000, { top: '30%' }, { top: '50%' })();

  return (
    <StyledSection>
      <StyledSideSection style={backgroundSlide} />
      <StyledTitle style={titleSlide}>{children}</StyledTitle>
    </StyledSection>
  );
};

export default TitleSection;

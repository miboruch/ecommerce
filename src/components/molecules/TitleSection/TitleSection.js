import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { easeExpOut } from 'd3-ease';

const StyledSection = styled.section`
  width: 100%;
  height: 220px;
  background: white;
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.color.background};
  overflow: hidden;
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
  const backgroundSlide = useSpring({
    config: { duration: 2000, easing: easeExpOut },
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
    delay: 1000
  });

  const titleSlide = useSpring({
    config: { duration: 1000, easing: easeExpOut },
    from: { opacity: 0, left: '30%' },
    to: { opacity: 1, left: '50%' },
    delay: 2000
  });

  return (
    <StyledSection>
      <StyledSideSection style={backgroundSlide} />
      <StyledTitle style={titleSlide}>{children}</StyledTitle>
    </StyledSection>
  );
};

export default TitleSection;

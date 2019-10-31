import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { createFadeIn } from '../../animations/animations';

const StyledWrapper = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled(animated(Paragraph))`
  color: ${({ theme }) => theme.color.headerFont};
  line-height: 1.8;
  margin: 0;
`;

const StyledLink = styled(animated(Link))`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.headerFont};
  letter-spacing: 2px;
  text-decoration: none;
  margin-top: 1rem;
  margin-bottom: 3rem;
  padding: 0 2rem;
  display: inline-block;

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.color.secondFont};
    transition: width 0.5s ease;
  }

  :hover::after {
    width: 200px;
    transition: width 0.5s ease;
  }
`;

const StoryContent = () => {
  const fadeIn = createFadeIn(1000, 2800)();
  const fadeInDelayed = createFadeIn(1000, 3600)();
  const fadeInLink = createFadeIn(1000, 4400)();

  return (
    <StyledWrapper>
      <StyledParagraph style={fadeIn} medium>
        I have been working on this project since September 29th. First step was to create a layout
        in Adobe XD, then I started to implement this layout into a real website. The main goal was
        to create an elegant e-commerce website, using Context API, React hooks and firebase. This
        is my first project with authentication as well, so this is kind of the test project for me.
      </StyledParagraph>
      <StyledParagraph style={fadeInDelayed} small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </StyledParagraph>
      <StyledLink to={'/products'} style={fadeInLink}>
        see our products
      </StyledLink>
    </StyledWrapper>
  );
};

export default StoryContent;

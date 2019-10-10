import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.headerFont};
  letter-spacing: 2px;
  line-height: 1.8;
  margin: 2rem;
`;

const StyledSecondParagraph = styled(StyledParagraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 3px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.headerFont};
  letter-spacing: 2px;
  text-decoration: none;
  margin-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 3rem;

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.color.secondFont};
    transition: width 0.5s ease;
  }

  :hover::after {
    width: 100%;
    transition: width 0.5s ease;
  }
`;

const StoryContent = () => {
  return (
    <>
      <StyledParagraph>
        I have been working on this project since September 29th. First step was
        to create a layout in Adobe XD, then I started to implement this layout
        into a real website. The main goal was to create an elegant e-commerce
        website, using Context API, React hooks and firebase. This is my first
        project with authentication as well, so this is kind of the test project
        for me.
      </StyledParagraph>
      <StyledSecondParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </StyledSecondParagraph>
      <StyledLink to={'/products'}>see our products</StyledLink>
    </>
  );
};

export default StoryContent;

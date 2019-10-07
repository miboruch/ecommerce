import React from 'react';
import styled from 'styled-components';

import image from '../../assets/images/background.jpeg';

const StyledImage = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  margin-top: 2rem;
`;

const StyledParagraph = styled.p`
  width: 90%;
  color: ${({ theme }) => theme.color.font};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: auto;
  padding-top: 2rem;
  letter-spacing: 2px;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.color.background};
`;

const About = () => {
  return (
    <>
      <StyledLine />
      <StyledImage src={image} />
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </StyledParagraph>
    </>
  );
};

export default About;

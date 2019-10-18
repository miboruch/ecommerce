import React from 'react';
import styled from 'styled-components';

import image from '../../../assets/images/background.jpg';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 2rem;

  ${({ theme }) => theme.mq.standard} {
    height: 100vh;
    justify-content: center;
  }
`;

const StyledParagraph = styled(Paragraph)`
  width: 90%;
  margin: auto;

  ${({ theme }) => theme.mq.standard} {
    width: 60%;
  }
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.color.background};
`;

const About = () => {
  return (
    <StyledWrapper>
      <StyledLine />
      <StyledImage src={image} />
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </StyledParagraph>
    </StyledWrapper>
  );
};

export default About;

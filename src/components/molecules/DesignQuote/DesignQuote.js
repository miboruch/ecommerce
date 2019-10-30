import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import image from '../../../assets/images/back.jpeg';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledBackgroundImage = styled.div`
  max-width: 100%;
  height: 90vh;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 2rem 0;

  @media all and (min-width: 600px) {
    background-position: 50% 100%;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    background-position: 80% 90%;
  }

  ${({ theme }) => theme.mq.standard} {
    width: 60%;
    margin: 2rem auto;
  }
`;

const StyledParagraph = styled(Paragraph)`
  width: 45%;
`;

const StyledQuoteAuthor = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const DesignQuote = () => {
  return (
    <Fade>
      <StyledBackgroundImage>
        <StyledParagraph small>
          Everything is designed. Few things are designed well. <br />
          <StyledQuoteAuthor>-Brian Reed</StyledQuoteAuthor>
        </StyledParagraph>
      </StyledBackgroundImage>
    </Fade>
  );
};

export default DesignQuote;

import React from 'react';
import styled from 'styled-components';

import image from '../../assets/images/back.jpeg';

const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${image});
  background-size: cover;
  margin: 2rem 0;
`;

const StyledParagraph = styled.p`
  width: 45%;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.font};
  padding: 2rem;
`;

const StyledQuoteAuthor = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const DesignQuote = () => {
  return (
    <StyledBackgroundImage>
      <StyledParagraph>
        Everything is designed. Few things are designed well. <br />
        <StyledQuoteAuthor>-Brian Reed</StyledQuoteAuthor>
      </StyledParagraph>
    </StyledBackgroundImage>
  );
};

export default DesignQuote;

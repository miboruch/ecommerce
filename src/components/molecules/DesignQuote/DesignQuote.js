import React from 'react';
import styled from 'styled-components';

import image from '../../../assets/images/back.jpeg';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${image});
  background-size: cover;
  margin: 2rem 0;
`;

const StyledParagraph = styled(Paragraph)`
  width: 45%;
  font-size: ${({ theme }) => theme.fontSize.xs};
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

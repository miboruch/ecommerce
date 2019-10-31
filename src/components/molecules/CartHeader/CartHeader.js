import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { createFadeIn } from '../../animations/animations';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledContainer = styled(animated.div)`
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.background};

  ${({ theme }) => theme.mq.standard} {
    width: 60%;
  }
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0;
`;

const CartHeader = () => {
  const fadeIn = createFadeIn(2000, 300)();
  return (
    <StyledContainer style={fadeIn}>
      <StyledParagraph>Product</StyledParagraph>
      <StyledParagraph>Quantity</StyledParagraph>
    </StyledContainer>
  );
};

export default CartHeader;

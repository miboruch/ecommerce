import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledImpact = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  letter-spacing: 3px;
  padding-left: 1rem;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledInfoBox = styled.div`
  width: 80%;
  margin: auto;
`;

const StyledTitle = styled.h1`
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 3px;
  text-align: right;
  margin: 0;
`;

const StyledSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.headerFont};
  letter-spacing: 2px;
  text-transform: lowercase;
  margin: 0;
  text-align: right;
`;

const StyledParagraph = styled.p`
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: right;
`;

const ProductContent = ({ productData }) => {
  console.log(productData);
  return (
    <StyledWrapper>
      <StyledImpact>01/0{productData.id}</StyledImpact>
      <StyledImage src={productData.photoURL} />
      <StyledInfoBox>
        <StyledTitle>{productData.name}</StyledTitle>
        <StyledSubtitle>{productData.addition}</StyledSubtitle>
        <StyledParagraph>{productData.price} USD</StyledParagraph>
        <label htmlFor={'basic'}>
          <input type={'radio'} name={'basic'} />
          BASIC
        </label>
      </StyledInfoBox>
    </StyledWrapper>
  );
};

export default ProductContent;

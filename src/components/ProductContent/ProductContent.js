import React from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  letter-spacing: 2px;
  text-align: right;
  margin: 1rem 0;
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

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;
`;

const Description = styled.p`
  width: 90%;
  letter-spacing: 2px;
  font-weight: normal;
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
        <Input inputType='select' options={['Basic pack', 'Extended pack']} />
        <Flex>
          <Input width='64px' placeholder='Quantity' type='number' min='1' max='5' />
          <Button>add to cart</Button>
        </Flex>
        <StyledParagraph>Total: {37.99} USD</StyledParagraph>
        <Description>
          People like consistency. Whether it’s a store or a restaurant, they want to come in and
          see what you are famous for.
        </Description>
      </StyledInfoBox>
    </StyledWrapper>
  );
};

export default ProductContent;

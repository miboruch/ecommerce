import React from 'react';
import styled from 'styled-components';
import { theme } from '../../assets/styles/theme';

const StyledWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  position: relative;
`;

const StyledHeading = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.footerFont};
  margin: 0;
  letter-spacing: 3px;
`;

const StyledSubtitle = styled.p`
  color: ${({ theme }) => theme.color.headerFont};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-top: 2px;
  margin-bottom: 32px;
  letter-spacing: 1px;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledPriceText = styled.p`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.footerFont};
  padding-left: 2rem;
  letter-spacing: 2px;
`;

const StyledMore = styled(StyledPriceText)`
  color: ${({ theme }) => theme.color.headerFont};
  background: linear-gradient(#333, #292a2b) left no-repeat #999;
  background-size: 0% 100%;
  background-clip: content-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 1s ease;

  ${StyledWrapper}:hover & {
    background-size: 100% 100%;
    transition: all 1s ease;
  }
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.color.background};
`;

const StyledLine = styled.div`
  position: absolute;
  right: 50px;
  bottom: 0;
  width: 15%;
  height: 1px;
  background: ${({ theme }) => theme.color.font};
  transition: all 1s ease;
`;

const Product = ({ name, addition, price, photoURL }) => (
  <StyledWrapper>
    <StyledHeading>{name}</StyledHeading>
    <StyledSubtitle>{addition}</StyledSubtitle>
    <StyledImage src={photoURL} />
    <StyledPriceText>USD {price}</StyledPriceText>
    <StyledMore>see more</StyledMore>
    <StyledBorder />
    <StyledLine />
  </StyledWrapper>
);

export default Product;

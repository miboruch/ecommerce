import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import { OrderContext } from '../../../contexts/OrderContext';

const StyledWrapper = styled.div`
  width: 95%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.background};
`;

const StyledImage = styled.img`
  width: 90%;
  height: 100%;
  margin: auto;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0;
  margin: 0;
`;

const QuantityBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NameBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const StyledButton = styled(Button)`
  margin: auto;
`;

const CartProduct = ({
  imageURL,
  name,
  pack,
  addition,
  quantity,
  totalPrice,
  remove,
  increase,
  decrease
}) => {
  return (
    <StyledWrapper>
      <StyledImage src={imageURL} />
      <QuantityBox>
        <Button cart onClick={increase}>
          +
        </Button>
        <Paragraph>{quantity}</Paragraph>
        <Button cart onClick={decrease}>
          -
        </Button>
      </QuantityBox>
      <NameBox>
        <StyledParagraph>{name}</StyledParagraph>
        <StyledParagraph small>{pack}</StyledParagraph>
        <StyledParagraph small>{addition}</StyledParagraph>
      </NameBox>
      <StyledButton onClick={remove}>Remove item</StyledButton>
      <Paragraph>{totalPrice}$</Paragraph>
    </StyledWrapper>
  );
};

CartProduct.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pack: PropTypes.string.isRequired,
  addition: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default CartProduct;

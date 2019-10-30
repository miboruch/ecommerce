import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import { createOpacity } from '../../animations/animations';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import { removeProduct, increaseQuantity, decreaseQuantity } from '../../../actions/cartAction';

const StyledWrapper = styled(animated.div)`
  width: 95%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.background};

  ${({ theme }) => theme.mq.standard} {
    width: 60%;
  }
`;

const StyledImage = styled.img`
  width: 90%;
  height: 100%;
  margin: auto;
  grid-row-start: 1;
  grid-row-end: 2;

  @media all and (min-width: 400px) {
    width: 160px;
    height: 86px;
  }
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
  id,
  index,
  imageURL,
  name,
  pack,
  addition,
  quantity,
  totalPrice,
  removeProduct,
  increaseQuantity,
  decreaseQuantity
}) => {
  const fadeIn = createOpacity(2000, 1300)();
  return (
    <StyledWrapper style={fadeIn}>
      <Link to={`/product/${id}`}>
        <StyledImage src={imageURL} />
      </Link>
      <QuantityBox>
        <Button cart onClick={() => decreaseQuantity(index)}>
          -
        </Button>
        <Paragraph>{quantity}</Paragraph>
        <Button cart onClick={() => increaseQuantity(index)}>
          +
        </Button>
      </QuantityBox>
      <NameBox>
        <StyledParagraph>{name}</StyledParagraph>
        <StyledParagraph small>{pack}</StyledParagraph>
        <StyledParagraph small>{addition}</StyledParagraph>
      </NameBox>
      <StyledButton onClick={() => removeProduct(id)}>Remove item</StyledButton>
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

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: id => dispatch(removeProduct(id)),
    increaseQuantity: index => dispatch(increaseQuantity(index)),
    decreaseQuantity: index => dispatch(decreaseQuantity(index))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartProduct);

import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CartHeader from '../../components/molecules/CartHeader/CartHeader';
import CartProduct from '../../components/molecules/CartProduct/CartProduct';
import Button from '../../components/atoms/Button/Button';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import { calculateTotalPrice } from '../../actions/orderAction';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  position: relative;
`;

const InnerWrapper = styled.div`
  width: 90%;
  margin: auto;

  ${({ theme }) => theme.mq.standard} {
    width: 60%;
    margin: auto;
  }
`;

const StyledHeader = styled.h1`
  width: 90%;
  margin: auto;
  letter-spacing: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: normal;
  text-align: center;
`;

const Cart = ({ cart, totalPrice, calculateTotalPrice }) => {
  /* It triggers calculate price function when quantity of object changes
   * inside cart array, or length of array changes, then we know, that
   * item was added or removed */
  useEffect(() => {
    calculateTotalPrice();
  }, [cart, cart.length]);

  return (
    <StyledWrapper>
      <CartHeader />
      {cart.length !== 0 ? (
        <>
          {cart.map((item, index) => (
            <CartProduct
              key={index}
              id={item.id}
              index={index}
              name={item.name}
              pack={item.pack}
              addition={item.addition}
              imageURL={item.photoURL}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
            />
          ))}
          <InnerWrapper>
            <Paragraph medium>Total: {totalPrice}$</Paragraph>
            <Button>Submit</Button>
          </InnerWrapper>
        </>
      ) : (
        <StyledHeader>Your cart is empty</StyledHeader>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ orderReducer: { cart, totalPrice } }) => {
  return { cart, totalPrice };
};

const mapDispatchToProps = dispatch => {
  return {
    calculateTotalPrice: () => dispatch(calculateTotalPrice())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

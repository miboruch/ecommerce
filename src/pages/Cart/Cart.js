import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import CartHeader from '../../components/molecules/CartHeader/CartHeader';
import CartProduct from '../../components/molecules/CartProduct/CartProduct';
import { OrderContext } from '../../contexts/OrderContext';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  position: relative;
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
  text-align: center;
`;

const Cart = () => {
  const {
    state,
    calculateTotalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(OrderContext);

  useEffect(() => {
    calculateTotalPrice();
  }, [state.cart, state.cart.length]);
  /* It triggers calculate price function when quantity of object changes
   * inside cart array, or length of array changes, then we know, that
   * item was added or removed */

  return (
    <StyledWrapper>
      <CartHeader />
      {state.cart.length !== 0 ? (
        <>
          {state.cart.map((item, index) => (
            <CartProduct
              key={index}
              name={item.name}
              pack={item.pack}
              addition={item.addition}
              imageURL={item.photoURL}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
              remove={() => removeFromCart(index)}
              increase={() => increaseQuantity(index)}
              decrease={() => decreaseQuantity(index)}
            />
          ))}
          <Paragraph medium>Total: {state.totalPrice}$</Paragraph>
        </>
      ) : (
        <StyledHeader>Your cart is empty</StyledHeader>
      )}
    </StyledWrapper>
  );
};

export default Cart;

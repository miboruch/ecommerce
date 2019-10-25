import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import CartHeader from '../../components/molecules/CartHeader/CartHeader';
import CartProduct from '../../components/molecules/CartProduct/CartProduct';
import Button from '../../components/atoms/Button/Button';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import { calculateTotalPrice } from '../../actions/cartAction';
import { createOrder } from '../../actions/orderAction';

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

const Cart = ({
  cart,
  totalPrice,
  calculateTotalPrice,
  token,
  userID,
  isLoggedIn,
  createOrder
}) => {
  /* It triggers calculate price function when quantity of object changes
   * inside cart array, or length of array changes, then we know, that
   * item was added or removed */
  useEffect(() => {
    calculateTotalPrice();
  }, [cart, cart.length]);

  const arrayToObject = array =>
    array.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});

  const order = arrayToObject(cart);

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
            {isLoggedIn ? (
              <Button onClick={() => createOrder(token, { order, userID, totalPrice })}>
                Submit
              </Button>
            ) : (
              <Link to='/login'>
                <Button>Log in first</Button>
              </Link>
            )}
          </InnerWrapper>
        </>
      ) : (
        <StyledHeader>Your cart is empty</StyledHeader>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({
  cartReducer: { cart, totalPrice },
  authReducer: { userID, token, isLoggedIn }
}) => {
  return { cart, totalPrice, token, userID, isLoggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    calculateTotalPrice: () => dispatch(calculateTotalPrice()),
    createOrder: (token, cart) => dispatch(createOrder(token, cart))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

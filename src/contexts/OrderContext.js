import React, { useContext, useReducer } from 'react';
import { orderReducer } from '../reducers/orderReducer';
import { ADD_TO_CART, REMOVE_FROM_CART, TOTAL_PRICE } from '../reducers/orderReducer';

export const OrderContext = React.createContext({
  cart: [],
  totalPrice: 0
});

const OrderContextProvider = ({ children }) => {
  const context = useContext(OrderContext);
  const [state, dispatch] = useReducer(orderReducer, context);

  const addToCart = product => {
    dispatch({
      type: ADD_TO_CART,
      product: product
    });
  };

  const removeFromCart = index => {
    dispatch({
      type: REMOVE_FROM_CART,
      index: index
    });
  };

  const calculateTotalPrice = () => {
    dispatch({
      type: TOTAL_PRICE
    });
  };

  return (
    <OrderContext.Provider value={{ state, addToCart, removeFromCart, calculateTotalPrice }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

import React, { useContext, useReducer } from 'react';
import { reducer } from '../reducers/reducer';
import {
  // ADD_TO_CART,
  // REMOVE_FROM_CART,
  // TOTAL_PRICE,
  // INCREASE_QUANTITY,
  // DECREASE_QUANTITY
} from '../reducers/reducer';

export const OrderContext = React.createContext({
  cart: [],
  totalPrice: 0
});

const OrderContextProvider = ({ children }) => {
  const context = useContext(OrderContext);
  const [state, dispatch] = useReducer(reducer, context);
  //
  // const addToCart = product => {
  //   dispatch({
  //     type: ADD_TO_CART,
  //     product: product
  //   });
  // };
  //
  // const removeFromCart = index => {
  //   dispatch({
  //     type: REMOVE_FROM_CART,
  //     index: index
  //   });
  // };
  //
  // const calculateTotalPrice = () => {
  //   dispatch({
  //     type: TOTAL_PRICE
  //   });
  // };
  //
  // const increaseQuantity = index => {
  //   dispatch({
  //     type: INCREASE_QUANTITY,
  //     index: index
  //   });
  // };
  //
  // const decreaseQuantity = index => {
  //   dispatch({
  //     type: DECREASE_QUANTITY,
  //     index: index
  //   });
  // };

  return (
    <OrderContext.Provider
      // value={{ state, addToCart, removeFromCart, calculateTotalPrice, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

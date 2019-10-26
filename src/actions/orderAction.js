import axios from 'axios';
import { ORDER_START, ORDER_SUCCESS, ORDER_FAILURE } from '../reducers/orderReducer';
const firebaseURL = 'https://ecommerce-page.firebaseio.com';

export const orderStart = () => {
  return {
    type: ORDER_START
  };
};

export const orderSuccess = response => {
  return {
    type: ORDER_SUCCESS,
    payload: response
  };
};

export const orderFailure = () => {
  return {
    type: ORDER_FAILURE
  };
};

export const createOrder = (token, orderObject) => async dispatch => {
  const ordersURL = `/history/orders.json?auth=${token}`;
  dispatch(orderStart());
  try {
    const response = await axios.post(`${firebaseURL}${ordersURL}`, orderObject);
    dispatch(orderSuccess(response));
  } catch (error) {
    dispatch(orderFailure());
  }
};

import axios from 'axios';
import {
  FETCH_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_ORDERS_SUCCESS,
  FETCH_FAILURE
} from '../reducers/firebaseReducer';
import { useDispatch } from 'react-redux';

const firebaseURL = 'https://ecommerce-page.firebaseio.com';

export const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    payload: orders
  };
};

export const fetchProductSuccess = products => {
  console.log(typeof products);
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
};

export const fetchFailure = error => {
  return {
    type: FETCH_FAILURE,
    payload: {
      error: error
    }
  };
};

/* action creator */

export const fetchProducts = () => async dispatch => {
  const productsURL = '/products.json';

  dispatch(fetchStart());
  try {
    const response = await axios.get(`${firebaseURL}${productsURL}`);
    let { aloe, fiveSucculent, leafed, succulent } = response.data.plants;

    dispatch(fetchProductSuccess([aloe, fiveSucculent, leafed, succulent]));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

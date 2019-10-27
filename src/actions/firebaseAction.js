import axios from 'axios';
import {
  FETCH_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_ORDERS_SUCCESS,
  FETCH_FAILURE
} from '../reducers/firebaseReducer';

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
    let result = [];
    const response = await axios.get(`${firebaseURL}${productsURL}`);

    for (let item in response.data.plants) {
      result.push({
        ...response.data.plants[item]
      });
    }

    dispatch(fetchProductSuccess(result));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};

// export const fetchOrders = (token, id) => async dispatch => {
//   const ordersURL = `/history/orders.json?auth=${token}`;
//
//   dispatch(fetchStart());
//   try {
//     const { data } = await axios.get(`${firebaseURL}${ordersURL}`);
//     console.log(data);
//     let fetchedOrders = [];
//     for (let item in data) {
//       console.log(data[item]);
//       if (data[item].userID === id) {
//         fetchedOrders.push(data[item]);
//       }
//     }
//
//     dispatch(fetchOrdersSuccess(fetchedOrders));
//   } catch (error) {
//     dispatch(fetchFailure(error));
//   }
// };

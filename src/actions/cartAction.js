import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CALCULATE_TOTAL,
  RESET_CART
} from '../reducers/cartReducer';

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

export const removeProduct = id => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id: id
    }
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART
  };
};

export const increaseQuantity = index => {
  return {
    type: INCREASE_QUANTITY,
    payload: {
      index: index
    }
  };
};

export const decreaseQuantity = index => {
  return {
    type: DECREASE_QUANTITY,
    payload: {
      index: index
    }
  };
};

export const calculateTotalPrice = () => {
  return {
    type: CALCULATE_TOTAL
  };
};

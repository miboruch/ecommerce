import { addProduct, removeProduct, calculateTotalPrice } from '../actions/orderAction';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const TOTAL_PRICE = 'TOTAL_PRICE';

export const orderReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addProduct(state, action.product);
    case REMOVE_FROM_CART:
      return removeProduct(state, action.index);
    case TOTAL_PRICE:
      return calculateTotalPrice(state);
    default:
      throw new Error('Wrong reducer type used');
  }
};

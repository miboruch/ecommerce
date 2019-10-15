import {
  addProduct,
  removeProduct,
  calculateTotalPrice,
  increaseQuantity,
  decreaseQuantity
} from '../actions/orderAction';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const TOTAL_PRICE = 'TOTAL_PRICE';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const orderReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addProduct(state, action.product);
    case REMOVE_FROM_CART:
      return removeProduct(state, action.index);
    case TOTAL_PRICE:
      return calculateTotalPrice(state);
    case INCREASE_QUANTITY:
      return increaseQuantity(state, action.index);
    case DECREASE_QUANTITY:
      return decreaseQuantity(state, action.index);
    default:
      throw new Error('Wrong reducer type used');
  }
};

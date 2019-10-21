export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const CALCULATE_TOTAL = 'CALCULATE_TOTAL';

const initialState = {
  cart: [],
  totalPrice: 0,
  cartError: false
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProduct(state, action.payload);
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: [...state.cart.filter(item => item.id !== action.payload.id)]
      };
    case INCREASE_QUANTITY:
      return increaseQuantity(state, action.payload.index);
    case DECREASE_QUANTITY:
      return decreaseQuantity(state, action.payload.index);
    case CALCULATE_TOTAL:
      return calculateTotalPrice(state);
    default:
      return state;
  }
};

/* ACTION CREATORS */

const addProduct = (state, product) => {
  console.log(state.cart);
  const isProductInCart = state.cart.some(item => item.id === product.id);

  return !isProductInCart
    ? {
        ...state,
        cartError: false,
        cart: [...state.cart, product]
      }
    : {
        ...state,
        cartError: true
      };
};

const increaseQuantity = (state, index) => {
  const cartItem = state.cart[index];

  if (cartItem.quantity < 5) {
    cartItem.quantity = cartItem.quantity + 1;
    cartItem.totalPrice = Number.parseFloat(
      (cartItem.totalPrice + cartItem.productPrice).toFixed(2)
    );
  }

  return {
    ...state,
    cart: [...state.cart]
  };
};

const decreaseQuantity = (state, index) => {
  const cartItem = state.cart[index];

  if (cartItem.quantity > 1) {
    cartItem.quantity = cartItem.quantity - 1;
    cartItem.totalPrice = Number.parseFloat(
      (cartItem.totalPrice - cartItem.productPrice).toFixed(2)
    );
  }

  return {
    ...state,
    cart: [...state.cart]
  };
};

const calculateTotalPrice = state => {
  const result = state.cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return {
    ...state,
    totalPrice: result.toFixed(2)
  };
};

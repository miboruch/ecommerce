const initialState = {
  cart: [],
  totalPrice: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        cart: [...state.cart.filter(item => item.id !== action.payload.id)]
      };
    case 'INCREASE_QUANTITY':
      return increaseQuantity(state, action.payload.index);
    case 'DECREASE_QUANTITY':
      return decreaseQuantity(state, action.payload.index);
    case 'CALCULATE_TOTAL':
      return calculateTotalPrice(state);
    default:
      return state;
  }
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
  let result = 0;
  state.cart.map(item => {
    result += item.totalPrice;
  });

  return {
    ...state,
    totalPrice: result.toFixed(2)
  };
};

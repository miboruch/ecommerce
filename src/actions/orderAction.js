export const addProduct = (state, product) => {
  const updatedCart = state.cart;
  updatedCart.push(product);

  return {
    ...state,
    cart: updatedCart
  };
};

export const removeProduct = (state, index) => {
  const cart = state.cart;
  cart.splice(index, 1);

  return {
    ...state,
    cart: cart
  };
};

export const calculateTotalPrice = state => {
  let result = 0;
  state.cart.map(item => {
    result += item.totalPrice;
  });

  return {
    ...state,
    totalPrice: result
  };
};

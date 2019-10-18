export const calculateTotalPrice = state => {
  let result = 0;
  state.cart.map(item => {
    result += item.totalPrice;
  });

  return {
    ...state,
    totalPrice: result.toFixed(2)
  };
};

export const addProduct = (state, product) => {
  const updatedCart = state.cart;
  updatedCart.push({
    ...product,
    totalPrice: product.quantity * product.productPrice
  });

  return {
    ...state,
    cart: updatedCart
  };
};

export const removeProduct = (state, index) => {
  const cart = state.cart;
  cart.splice(index, 1);
  calculateTotalPrice(state);

  return {
    ...state,
    cart: cart
  };
};

export const increaseQuantity = (state, index) => {
  const cartItem = state.cart[index];
  if (cartItem.quantity < 5) {
    cartItem.quantity = cartItem.quantity + 1;
    cartItem.totalPrice = Number.parseFloat(
      (cartItem.totalPrice + cartItem.productPrice).toFixed(2)
    );
  }

  calculateTotalPrice(state);
  console.log(state);
  return {
    ...state,
    cart: [...state.cart]
  };
};

export const decreaseQuantity = (state, index) => {
  const cartItem = state.cart[index];

  if (cartItem.quantity > 1) {
    cartItem.quantity = cartItem.quantity - 1;
    cartItem.totalPrice = Number.parseFloat(
      (cartItem.totalPrice - cartItem.productPrice).toFixed(2)
    );
  }

  calculateTotalPrice(state);
  return {
    ...state,
    cart: [...state.cart]
  };
};

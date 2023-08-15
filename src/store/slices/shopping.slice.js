import { createSlice } from '@reduxjs/toolkit';

// Product item
// title, price, description, total (qty * price), quantity = 1

const initialState = {
  shoppingCart: [], // ProductItem[]
  displayShoppingCart: false,
};

const addToCart = (state, action) => {
  const existingProduct = state.shoppingCart.some(
    (item) => item.title?.toLowerCase() === action.payload.title?.toLowerCase()
  );

  if (!existingProduct) {
    state.shoppingCart.push(action.payload);
  }
};

const removeToCart = (state, action) => {
  const filteredProducts = state.shoppingCart.filter(
    (product) =>
      product.title?.toLowerCase() !== action.payload.title.toLowerCase()
  );

  state.shoppingCart = filteredProducts;
};

const increaseProductQty = (state, action) => {
  const products = state.shoppingCart.map((product) => {
    if (product.title.toLowerCase() === action.payload.title.toLowerCase()) {
      product.quantity++;
      product.total = product.quantity * product.price;
    }

    return product;
  });

  state.shoppingCart = products;
};

const decreaseProductQty = (state, action) => {
  const products = state.shoppingCart.map((product) => {
    if (product.title.toLowerCase() === action.payload.title.toLowerCase()) {
      product.quantity--;
      product.total = product.quantity * product.price;
    }

    return product;
  });

  const filteredProducts = products.filter((product) => product.quantity > 0);

  state.shoppingCart = filteredProducts;
};

const toggleShoppingCart = (state) => {
  state.displayShoppingCart = !state.displayShoppingCart;
};

/**
 * Shopping cart slices
 * @todo refactor in reducers function later
 */
const shoppingSlice = createSlice({
  name: 'shopping-cart',
  initialState,
  reducers: {
    addToCart,
    removeToCart,
    increaseProductQty,
    decreaseProductQty,
    toggleShoppingCart,
  },
});

export default shoppingSlice;

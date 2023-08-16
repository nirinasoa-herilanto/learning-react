import { createSlice } from '@reduxjs/toolkit';

// Product item
// title, price, description, total (qty * price), quantity = 1

const initialState = {
  shoppingCart: [], // ProductItem[]
  displayShoppingCart: false,
};

const loadShoppingCart = (state, action) => {
  state.shoppingCart = action.payload;
};

const addToCart = (state, action) => {
  const existingProduct = state.shoppingCart.find(
    (item) => item.title?.toLowerCase() === action.payload.title?.toLowerCase()
  );

  if (existingProduct) {
    existingProduct.quantity++;
    existingProduct.total = existingProduct.price * existingProduct.quantity;
  } else {
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
    loadShoppingCart,
    addToCart,
    removeToCart,
    increaseProductQty,
    decreaseProductQty,
    toggleShoppingCart,
  },
});

export default shoppingSlice;

import { configureStore } from '@reduxjs/toolkit';

import shoppingSlice from './slices/shopping.slice';

/**
 * App Store using Redux toolkit
 */
const store = configureStore({
  reducer: { shop: shoppingSlice.reducer },
});

export default store;

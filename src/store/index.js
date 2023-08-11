import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      // here we can do that, we are allowed to mutate the state,
      //  @reduxjs/toolkit do the job for us
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.value;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// reducer: {counterSlice.reducer, ...} // for multiple reducer functions

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;

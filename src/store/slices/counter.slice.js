import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  value: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // here we can do that, we are allowed to mutate the state,
      //  @reduxjs/toolkit do the job for us
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      // state.counter += action.payload.value;
      state.value += action.payload; // by default
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;

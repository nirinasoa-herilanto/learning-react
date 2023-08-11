import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  value: 0,
  showCounter: true,
};

const initialAuthState = {
  isLoggedIn: false,
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

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

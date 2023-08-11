import * as redux from 'redux';

const initialState = {
  counter: 0,
  showCounter: true,
};

// Not do that, we shouldn't never mutate the state
// if (action.type === 'increment') {
//   state.counter++;

//   return state;
// }

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

export default store;

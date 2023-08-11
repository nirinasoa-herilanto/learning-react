import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch(counterActions.increase({ value: 5 }));
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

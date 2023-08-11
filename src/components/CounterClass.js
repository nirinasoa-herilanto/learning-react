import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import classes from './Counter.module.css';

class Counter extends React.Component {
  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Class Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

// equivalent to useSelector(state => state.counter) in RAFCE
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

// equivalent to useDispatch() in RAFCE
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

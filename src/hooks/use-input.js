import { useReducer } from 'react';

const initialValue = {
  value: '',
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }

  if (action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true,
    };
  }

  if (action.type === 'RESET') {
    return initialValue;
  }

  return initialValue;
};

/**
 * Custom hook, useInput, an abstraction of input handler
 * @param {Function} validateValueFn a function to validate value from input
 * @returns {any} value, entered value from the input
 * @returns {boolean} hasError, if no value && the input is blur
 * @returns {Function} valueChangeHandler, a method that allow to update value
 * @returns {Function} inputBlurHandler, a method that allow to blur the input field
 */
const useInput = (validateValueFn) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initialValue);

  const valueIsValid = validateValueFn(inputState.value); // boolean, by default, true
  const hasError = !valueIsValid && inputState.isTouched; // if no value && the input is blur

  const valueChangeHandler = (e) => {
    dispatchInput({ type: 'INPUT', value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatchInput({ type: 'BLUR' });
  };

  const resetValueHandler = () => {
    dispatchInput({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetValueHandler,
  };
};

export default useInput;

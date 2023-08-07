import { useState } from 'react';

/**
 * Custom hook, useInput, an abstraction of input handler
 * @param {Function} validateValueFn a function to validate value from input
 * @returns {any} value, entered value from the input
 * @returns {boolean} hasError, if no value && the input is blur
 * @returns {Function} valueChangeHandler, a method that allow to update value
 * @returns {Function} inputBlurHandler, a method that allow to blur the input field
 */
const useInput = (validateValueFn) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValueFn(enteredValue); // boolean, by default, true
  const hasError = !valueIsValid && isTouched; // if no value && the input is blur

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetValueHandler = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetValueHandler,
  };
};

export default useInput;

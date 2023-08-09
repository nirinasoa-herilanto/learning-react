import { useState } from 'react';

const useInput = (isValidate) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = isValidate(enteredValue);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    enteredValue,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInputHandler,
  };
};

export default useInput;

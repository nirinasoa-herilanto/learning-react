import React from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    resetValueHandler: resetEnteredNameHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetValueHandler: resetEnteredEmailHandler,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (nameInputHasError && emailInputHasError) {
      return;
    }

    console.log(enteredName, enteredEmail);
    resetEnteredNameHandler();
    resetEnteredEmailHandler();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div
        className={nameInputHasError ? 'form-control invalid' : 'form-control'}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name can not be empty.</p>
        )}
      </div>

      <div
        className={emailInputHasError ? 'form-control invalid' : 'form-control'}
      >
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Invalid google email account.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid =
    enteredEmail.trim() !== '' && enteredEmail.includes('@gmail.com');
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const nameBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const emailBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);

    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div
        className={nameInputIsValid ? 'form-control invalid' : 'form-control'}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputIsValid && (
          <p className="error-text">Name can not be empty.</p>
        )}
      </div>

      <div
        className={emailInputIsValid ? 'form-control invalid' : 'form-control'}
      >
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputIsValid && (
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

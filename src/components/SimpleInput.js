import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputRef = useRef();

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameBlurHandler = () => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    const enteredNameValue = nameInputRef.current.value;

    console.log(enteredName);
    console.log(enteredNameValue);

    // nameInputRef.current.value = ''; // Not Ideal, don't manipulate the DOM directly
    setEnteredName('');
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name valid :)');
    }
  }, [enteredNameIsValid]);

  return (
    <form onSubmit={formSubmissionHandler}>
      <div
        className={nameInputIsValid ? 'form-control invalid' : 'form-control'}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          ref={nameInputRef}
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputIsValid && (
          <p className="error-text">Name can not be empty.</p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

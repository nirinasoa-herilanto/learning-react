import React, { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const enteredNameValue = nameInputRef.current.value;
    console.log(enteredName);
    console.log(enteredNameValue);

    // nameInputRef.current.value = ''; // Not Ideal, don't manipulate the DOM directly
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          ref={nameInputRef}
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

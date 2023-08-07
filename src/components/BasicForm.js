import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    isValid: enteredFirstNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    resetValueHandler: resetEnteredFirstNameHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    resetValueHandler: resetEnteredLastNameHandler,
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

  if (enteredFirstNameIsValid && enteredEmailIsValid && enteredLastName) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetEnteredFirstNameHandler();
    resetEnteredLastNameHandler();
    resetEnteredEmailHandler();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div
          className={
            firstNameInputHasError ? 'form-control invalid' : 'form-control'
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={nameChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">First Name can not be empty.</p>
          )}
        </div>

        <div
          className={
            lastNameInputHasError ? 'form-control invalid' : 'form-control'
          }
        >
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last Name can not be empty.</p>
          )}
        </div>
      </div>

      <div
        className={emailInputHasError ? 'form-control invalid' : 'form-control'}
      >
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please provide a valid email address.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

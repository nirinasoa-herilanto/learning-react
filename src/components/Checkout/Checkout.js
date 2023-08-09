import React from 'react';
import styles from './Checkout.module.css';
import useInput from '../../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const hasFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    enteredValue: enteredName,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    resetInputHandler: resetNameInput,
    isValid: nameIsValid,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredStreet,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    hasError: streetHasError,
    resetInputHandler: resetStreetInput,
    isValid: streetIsValid,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredPostalCode,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    hasError: postalCodeHasError,
    resetInputHandler: resetPostalCodeInput,
    isValid: postalCodeIsValid,
  } = useInput(hasFiveChars);

  const {
    enteredValue: enteredCity,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    hasError: cityHasError,
    resetInputHandler: resetCityInput,
    isValid: cityIsValid,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const checkoutInputData = {
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    };

    props.onSubmitCheckout(checkoutInputData);

    resetNameInput();
    resetStreetInput();
    resetPostalCodeInput();
    resetCityInput();
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${nameHasError ? styles.invalid : ''}`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p>Name can not be empty</p>}
      </div>

      <div
        className={`${styles.control} ${streetHasError ? styles.invalid : ''}`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && <p>Street can not be empty.</p>}
      </div>

      <div
        className={`${styles.control} ${
          postalCodeHasError ? styles.invalid : ''
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostalCode}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeHasError && (
          <p>Postal code can not be less than 5 characters.</p>
        )}
      </div>

      <div
        className={`${styles.control} ${cityHasError ? styles.invalid : ''}`}
      >
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && <p>City can not be empty.</p>}
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;

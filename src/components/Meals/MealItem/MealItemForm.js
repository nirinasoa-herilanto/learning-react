import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';

import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsvalid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const amount = amountInputRef.current.value;

    if (amount.trim().length === 0 || +amount < 1 || +amount > 5) {
      setAmountIsvalid(false);
      return;
    }

    setAmountIsvalid(true);
    props.onAddAmount(+amount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        className={styles['form-input']}
        label="Amount"
        id={`amount_${props.id}`}
        type="number"
        step="1"
        defaultValue="1"
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;

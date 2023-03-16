import './NewExpense.css';
import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const showExpenseFormHandler = () => setShowExpenseForm(!showExpenseForm);

  const saveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: `e${Date.now()}`,
    };

    props.onAddExpense(expenseData);
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseHandler={saveExpenseDataHandler}
          onCancelHandler={showExpenseFormHandler}
        />
      )}

      {!showExpenseForm && (
        <button onClick={showExpenseFormHandler}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;

import './NewExpense.css';
import React from 'react';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: `e${Math.floor(Math.random() * 10) + 1}`,
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseHandler={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

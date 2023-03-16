import './NewExpense.css';
import React from 'react';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: `e${Date.now()}`,
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

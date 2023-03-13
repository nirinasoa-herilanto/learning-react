import './Expenses.css';
import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../Card/Card';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.data?.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;

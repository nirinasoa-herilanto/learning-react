import './Expenses.css';
import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../Card/Card';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const expensesFilterHandler = (date) => {
    setSelectedYear(date);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onFilterHandler={expensesFilterHandler}
      />

      {props.data
        ?.filter(
          (expense) => expense.date.getFullYear().toString() === selectedYear
        )
        .map((expense) => (
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

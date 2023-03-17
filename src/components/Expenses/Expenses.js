import './Expenses.css';
import React, { useState } from 'react';

import Card from '../Card/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const expensesFilterHandler = (date) => {
    setSelectedYear(date);
  };

  const filteredExpenses = props.data?.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onFilterHandler={expensesFilterHandler}
      />

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

import React, { useState } from 'react';

import { calculateHandler } from './utils/calculateHandler';

import Header from './components/Header/Header';
import CalculateForm from './components/CalculateForm/CalculateForm';
import ResultsTable from './components/ResultsTable/ResultsTable';

const App = () => {
  const [data, setData] = useState(null);
  const [initialInvestment, setInitialInvestment] = useState(0);

  const calculateInvestmentHandler = (userInput) => {
    if (!userInput) {
      setData(null);
      return;
    }

    setInitialInvestment(userInput['current-savings']);

    const results = calculateHandler(userInput);
    setData(results);
  };

  return (
    <div>
      <Header />
      <CalculateForm onCalculateInvestment={calculateInvestmentHandler} />

      {!data ? (
        <div className="no-investment">No investment calculation yet.</div>
      ) : (
        <ResultsTable data={data} initialInvestment={initialInvestment} />
      )}
    </div>
  );
};

export default App;

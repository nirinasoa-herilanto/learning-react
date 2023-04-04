import React from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Meals />
    </React.Fragment>
  );
};

export default App;

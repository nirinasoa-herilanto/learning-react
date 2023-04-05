import React from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;

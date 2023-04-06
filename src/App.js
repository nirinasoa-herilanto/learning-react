import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => setCartIsShow(true);
  const hideCartHandler = () => setCartIsShow(false);

  return (
    <React.Fragment>
      <Header onShowCart={showCartHandler} />
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;

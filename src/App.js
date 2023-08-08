import React, { useState } from 'react';

import CartProvider from './store/CartProvider';
import AuthProvider from './store/auth/AuthProvider';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => setCartIsShow(true);
  const hideCartHandler = () => setCartIsShow(false);

  return (
    <AuthProvider>
      <CartProvider>
        <Header onShowCart={showCartHandler} />

        {cartIsShow && <Cart onHideCart={hideCartHandler} />}

        <main>
          <Meals />
        </main>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

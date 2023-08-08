import React, { useState } from 'react';

import CartProvider from './store/CartProvider';
import AuthProvider from './store/auth/AuthProvider';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useAuthStore } from './store/auth/auth-context';
import Button from './components/UI/Button';

const App = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const {
    auth: { user, loggout },
  } = useAuthStore();

  const showCartHandler = () => setCartIsShow(true);
  const hideCartHandler = () => setCartIsShow(false);

  return (
    <AuthProvider>
      <CartProvider>
        <Header onShowCart={showCartHandler} />

        {cartIsShow && <Cart onHideCart={hideCartHandler} />}

        <div>
          {user && <p>There is an user!</p>}
          {user && <Button onClick={loggout}>Loggout</Button>}
        </div>

        <main>
          <Meals />
        </main>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

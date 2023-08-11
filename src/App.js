import React from 'react';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';

const App = () => {
  const auth = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Header />
      {!auth && <Auth />}
      <Counter />
    </>
  );
};

export default App;

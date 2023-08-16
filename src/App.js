import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showShoppinCart = useSelector(
    (state) => state.shop.displayShoppingCart
  );
  const shoppingCart = useSelector((state) => state.shop.shoppingCart);

  useEffect(() => {
    shoppingCart?.length !== 0 &&
      window.localStorage.setItem(
        'shopping-cart',
        JSON.stringify(shoppingCart)
      );
  }, [shoppingCart]);

  return (
    <Layout>
      {showShoppinCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

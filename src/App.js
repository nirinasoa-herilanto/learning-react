import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { shoppingActions } from './store/actions/shopping.action';

function App() {
  const dispatch = useDispatch();
  const showShoppinCart = useSelector(
    (state) => state.shop.displayShoppingCart
  );
  const shoppingCart = useSelector((state) => state.shop.shoppingCart);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('shopping-cart'));

    data &&
      data?.length !== 0 &&
      dispatch(shoppingActions.loadShoppingCart(data));
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <Layout>
      {showShoppinCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

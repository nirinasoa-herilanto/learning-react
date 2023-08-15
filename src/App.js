import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showShoppinCart = useSelector(
    (state) => state.shop.displayShoppingCart
  );

  return (
    <Layout>
      {showShoppinCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const shoppingProducts = useSelector((state) => state.shop.shoppingCart);

  const shoppingProductsMarkup = shoppingProducts?.map((product) => (
    <CartItem key={product.title} item={product} />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>

      {shoppingProducts.length !== 0 ? (
        <ul>{shoppingProductsMarkup}</ul>
      ) : (
        <p>No products</p>
      )}
    </Card>
  );
};

export default Cart;

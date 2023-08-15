import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';

import { shoppingActions } from '../../store/actions/shopping.action';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const shoppingProducts = useSelector((state) => state.shop.shoppingCart);

  const toggleShoppingCartHandler = () => {
    dispatch(shoppingActions.toggleShoppingCart());
  };

  return (
    <button className={classes.button} onClick={toggleShoppingCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{shoppingProducts?.length}</span>
    </button>
  );
};

export default CartButton;

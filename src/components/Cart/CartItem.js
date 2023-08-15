import { useDispatch } from 'react-redux';
import { shoppingActions } from '../../store/actions/shopping.action';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const increaseProductQtyHandler = () => {
    dispatch(shoppingActions.increaseProductQty({ title }));
  };

  const decreaseProductQtyHandler = () => {
    dispatch(shoppingActions.decreaseProductQty({ title }));
  };

  const removeProductHandler = () => {
    dispatch(shoppingActions.removeToCart({ title }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes['price']}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseProductQtyHandler}>-</button>
          <button onClick={increaseProductQtyHandler}>+</button>
          <button onClick={removeProductHandler}>Remove to cart</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

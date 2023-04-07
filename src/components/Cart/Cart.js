import React, { useContext } from 'react';
import styles from './Cart.module.css';

import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addCartItemHandler = (item) => cartCtx.addItem(item);
  const removeCartItemHandler = (id) => cartCtx.removeItem(id);

  const cartLists = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={addCartItemHandler.bind(null, { ...item, amount: 1 })}
      onRemove={removeCartItemHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={styles['cart-items']}>{cartLists}</ul>

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className={styles.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;

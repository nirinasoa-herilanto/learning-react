import React from 'react';
import styles from './Cart.module.css';

const Cart = () => {
  const cartLists = [{ id: 'c1', name: 'Shushi', price: '12.99' }].map(
    (item) => <li key={item.id}>{item.name}</li>
  );

  return (
    <div>
      <ul className={styles['cart-items']}>{cartLists}</ul>

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.88</span>
      </div>

      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;

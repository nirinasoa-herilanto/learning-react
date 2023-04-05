import React from 'react';
import styles from './HeaderCartButton.module.css';

import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>

      <span>Your cart</span>

      <span className={styles.badge}>1</span>
    </button>
  );
};

export default HeaderCartButton;
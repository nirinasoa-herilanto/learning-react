import React, { useState, useContext, useEffect } from 'react';
import styles from './HeaderCartButton.module.css';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import Button from '../UI/Button';

const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const { items } = useContext(CartContext);

  const totalCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setBtnHighlighted(true);

    const timeout = setTimeout(() => setBtnHighlighted(false), 300);

    return () => clearInterval(timeout);
  }, [items]);

  return (
    <Button
      className={`${btnHighlighted ? styles.bump : ''}`}
      onClick={props.onClick}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>

      <span>Your cart</span>

      <span className={styles.badge}>{totalCartItems}</span>
    </Button>
  );
};

export default HeaderCartButton;

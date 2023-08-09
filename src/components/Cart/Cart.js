import React, { useContext, useState } from 'react';
import styles from './Cart.module.css';

import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

import Checkout from '../Checkout/Checkout';
import { appConfig } from '../../config/app.config';

const Cart = (props) => {
  const [showMesssage, setIsShowMessage] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addCartItemHandler = (item) => cartCtx.addItem(item);
  const removeCartItemHandler = (id) => cartCtx.removeItem(id);

  const submitCheckoutHandler = async (data) => {
    setIsCheckout(true);

    await fetch(`${appConfig.auth.databaseUrl}/checkouts.json`, {
      method: 'POST',
      body: JSON.stringify({ meals: cartCtx.items, orderBy: data }),
    });

    setIsCheckout(false);
    setIsShowMessage(true);

    cartCtx.resetItem();
    props.onToggleOrderMeals();
  };

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
      {isCheckout && <h1>Please wait during the checkout process.</h1>}
      {showMesssage && <h1>Thank you, order meals was successfull.</h1>}

      {!showMesssage && !isCheckout && (
        <>
          <ul className={styles['cart-items']}>{cartLists}</ul>

          <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
        </>
      )}

      {!props.showOrderMeals && (
        <div className={styles.actions}>
          <button className={styles['button--alt']} onClick={props.onHideCart}>
            Close
          </button>

          {cartCtx.items.length > 0 && (
            <button
              className={styles.button}
              onClick={props.onToggleOrderMeals}
            >
              Order
            </button>
          )}
        </div>
      )}

      {props.showOrderMeals && !isCheckout && (
        <Checkout
          onCancel={props.onToggleOrderMeals}
          onSubmitCheckout={submitCheckoutHandler}
        />
      )}
    </Modal>
  );
};

export default Cart;

import React, { useReducer } from 'react';

import CartContext from './cart-context';

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const items = state.items.concat(action.item);
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items, totalAmount };
  }

  if (action.type === 'REMOVE_ITEM') {
  }

  return initialCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

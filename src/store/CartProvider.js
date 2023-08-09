import React, { useReducer } from 'react';

import CartContext from './cart-context';

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    let totalAmount = state.totalAmount;

    const existingItem = state.items.some((item) => action.item.id === item.id);

    const updatedItems = state.items.map((el) => {
      if (el.id === action.item.id) {
        return { ...el, amount: el.amount + action.item.amount };
      }

      return el;
    });

    const items = existingItem ? updatedItems : state.items.concat(action.item);

    totalAmount = items.reduce((acc, item) => {
      return acc + item.amount * item.price;
    }, 0);

    return { items, totalAmount };
  }

  if (action.type === 'REMOVE_ITEM') {
    let totalAmount = state.totalAmount;

    const items = state.items
      .map((item) => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount - 1 };
        }

        return item;
      })
      .filter((el) => {
        return el.amount > 0;
      });

    totalAmount = items.reduce((acc, item) => {
      return acc + item.amount * item.price;
    }, 0);

    return { items, totalAmount };
  }

  if (action.type === 'RESET') {
    return initialCartState;
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

  const resetItemHandler = () => {
    dispatchCartAction({ type: 'RESET' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    resetItem: resetItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

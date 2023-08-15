import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { shoppingActions } from '../../store/actions/shopping.action';

const ProductItem = (props) => {
  const { title, price, description } = props;

  const dispatch = useDispatch();

  const addToShoppingCartHandler = () => {
    const product = {
      title,
      price,
      description,
      quantity: 1,
      total: price,
    };

    dispatch(shoppingActions.addToCart(product));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToShoppingCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

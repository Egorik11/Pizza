import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import Button from '../Button/Button';
import NumberInput from '../NumberInput/NumberInput';

import styles from './PizzaItem.module.css';

const PizzaItem = ({ pizza }) => {
  const { state, dispatch } = useContext(CartContext);

  const handleClick = () => {
    dispatch({
      type: 'ADD_PIZZA',
      payload: pizza,
    });
  };

  const isExist = state.items.find((item) => item.id === pizza.id);

  return (
    <>
      <li className={styles.pizza}>
        <img src={pizza.imageUrl} className={styles.pizza__image} />
        <div className={styles.pizza__info}>
          <p className={styles.pizza__name}>{pizza.name}</p>
          <p className={styles.pizza__ingredients}>
            {pizza.ingredients.join(', ')}
          </p>
          <div className={styles.pizza__actions}>
            <p className={styles.pizza__price}>€{pizza.unitPrice}</p>
            {pizza.soldOut ? (
              isExist ? (
                <NumberInput state={state} pizza={pizza} dispatch={dispatch} />
              ) : (
                <Button onClick={handleClick}>Add to cart</Button>
              )
            ) : (
              'Sold out'
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default PizzaItem;

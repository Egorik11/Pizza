import { useState } from 'react';
import Button from '../Button/Button';

import styles from './PizzaItem.module.css';

function PizzaItem({ pizza }) {
  const [counterItem, setCounterItem] = useState(0);

  const handleClickDecrement = () => {
    counterItem > 0 ? setCounterItem(counterItem - 1) : 0;
  };

  const handleClickIncrement = () => {
    setCounterItem(counterItem + 1);
  };

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
              <>
                <div>
                  <Button onClick={handleClickDecrement}>-</Button>
                  {counterItem}
                  <Button onClick={handleClickIncrement}>+</Button>
                </div>
                <Button>Add to cart</Button>
              </>
            ) : (
              'Sold out'
            )}
          </div>
        </div>
      </li>
    </>
  );
}

export default PizzaItem;

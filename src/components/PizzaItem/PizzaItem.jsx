import { useContext, useState } from 'react';
import { BadgeContext, CartContext } from '../../App';

import Button from '../Button/Button';
import NumberInput from '../NumberInput/NumberInput';

import styles from './PizzaItem.module.css';

function PizzaItem({ pizza }) {
  const [counterItem, setCounterItem] = useState(1);
  const { cartItem, setCartItem } = useContext(CartContext);
  const { setCountBadge } = useContext(BadgeContext);

  const handleClickToCart = (pizza) => {
    const checkDuplicated = cartItem.findIndex((item) => item.id === pizza.id);

    if (checkDuplicated !== -1) {
      return;
    }

    setCartItem((prevItem) => [...prevItem, pizza]);
    setCountBadge((prevCount) => prevCount + counterItem);
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
                <NumberInput onClick={setCounterItem} />
                <Button onClick={() => handleClickToCart(pizza)}>
                  Add to cart
                </Button>
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

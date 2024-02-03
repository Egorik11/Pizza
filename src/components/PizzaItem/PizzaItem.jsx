import Button from '../Button/Button';

import styles from './PizzaItem.module.css';

function PizzaItem({ pizza }) {
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
            {pizza.soldOut ? (
              <>
                <p className={styles.pizza__price}>€{pizza.unitPrice}</p>
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

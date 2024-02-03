import PizzaItem from '../PizzaItem/PizzaItem';

import styles from './PizzaList.module.css';

function PizzaList({ dataPizzas }) {
  return (
    <>
      <ul className={styles.list}>
        {dataPizzas.map((pizza) => {
          return <PizzaItem key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </>
  );
}

export default PizzaList;

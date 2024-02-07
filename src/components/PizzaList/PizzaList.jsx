import PizzaItem from '../PizzaItem/PizzaItem';

import styles from './PizzaList.module.css';

function PizzaList({ dataPizzas, searchParams }) {
  const filteredSearch = searchParams
    ? dataPizzas.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchParams.toLowerCase()),
      )
    : dataPizzas;

  return (
    <>
      <ul className={styles.list}>
        {filteredSearch.map((pizza) => {
          return <PizzaItem key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </>
  );
}

export default PizzaList;

import PizzaItem from '../PizzaItem/PizzaItem';

import styles from './PizzaList.module.css';

function PizzaList({ dataPizzas, searchParams, sortType, filterParams }) {
  const filteredSearch = searchParams
    ? dataPizzas.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchParams.toLowerCase()),
      )
    : dataPizzas;

  let sortedList;

  switch (sortType) {
    case '0':
      sortedList = filteredSearch;
      break;
    case '1':
      sortedList = filteredSearch
        .slice()
        .sort((a, b) => a.unitPrice - b.unitPrice);
      break;
    case '2':
      sortedList = filteredSearch
        .slice()
        .sort((a, b) => b.unitPrice - a.unitPrice);
      break;
    case '3':
      sortedList = filteredSearch.filter((item) => item.soldOut);
      break;
    default:
      sortedList = filteredSearch;
  }

  const showFilteredItems =
    filterParams !== 'All'
      ? sortedList.filter((item) => item.type === filterParams)
      : sortedList;

  return (
    <>
      <ul className={styles.list}>
        {showFilteredItems.map((pizza) => {
          return <PizzaItem key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </>
  );
}

export default PizzaList;

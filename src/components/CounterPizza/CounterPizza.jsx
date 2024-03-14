import styles from './CounterPizza.module.css';

const CounterPizza = ({ state, pizza, dispatch }) => {
  const getQuantityById =
    state.items.find((item) => item.id === pizza.id)?.quantity || 0;

  const handleClickIncrement = () => {
    dispatch({
      type: 'INCREMENT_PIZZA',
      payload: pizza,
    });
  };

  const handleClickDecrement = () => {
    if (getQuantityById <= 1) {
      dispatch({
        type: 'DELETE_PIZZA',
        payload: pizza,
      });
    } else {
      dispatch({
        type: 'DECREMENT_PIZZA',
        payload: pizza,
      });
    }
  };

  return (
    <div className={styles.block}>
      <button
        onClick={handleClickDecrement}
        className={styles.button}
        disabled={getQuantityById <= 0}
      >
        -
      </button>
      <p className={styles.text}>{getQuantityById}</p>
      <button onClick={handleClickIncrement} className={styles.button}>
        +
      </button>
    </div>
  );
};

export default CounterPizza;

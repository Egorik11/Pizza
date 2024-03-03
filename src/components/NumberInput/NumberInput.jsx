import styles from './NumberInput.module.css';

const NumberInput = ({ state, pizza, dispatch }) => {
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
    <>
      <button
        onClick={handleClickDecrement}
        className={styles.button}
        disabled={getQuantityById <= 0}
      >
        -
      </button>
      <p>{getQuantityById}</p>
      <button onClick={handleClickIncrement} className={styles.button}>
        +
      </button>
    </>
  );
};

export default NumberInput;

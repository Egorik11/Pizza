import { useReducer } from 'react';

import styles from './NumberInput.module.css';

const initialState = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

function NumberInput({ onClick }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({
      type: 'INCREMENT',
    });
    onClick(state + 1);
  };

  const handleDecrement = () => {
    dispatch({
      type: 'DECREMENT',
    });
    onClick(state - 1);
  };

  return (
    <>
      <button
        className={styles.button}
        disabled={state <= 1}
        onClick={handleDecrement}
      >
        -
      </button>
      <p>{state}</p>
      <button className={styles.button} onClick={handleIncrement}>
        +
      </button>
    </>
  );
}

export default NumberInput;

import styles from './NumberInput.module.css'

function NumberInput({ value, onClickDecrement, onClickIncrement }) {
  return (
    <>
      <button
        className={styles.button}
        disabled={value <= 1}
        onClick={onClickDecrement}
      >
        -
      </button>
      <p>{value}</p>
      <button className={styles.button} onClick={onClickIncrement}>
        +
      </button>
    </>
  );
}

export default NumberInput;

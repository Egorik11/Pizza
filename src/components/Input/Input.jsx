import styles from './Input.module.css';

function Input({ placeholder, value, onChange }) {
  return (
    <>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}

export default Input;

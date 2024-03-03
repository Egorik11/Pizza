import styles from './SearchInput.module.css';

const SearchInput = ({ placeholder, value, onChange }) => {
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
};

export default SearchInput;

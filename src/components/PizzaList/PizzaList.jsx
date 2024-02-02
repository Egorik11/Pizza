import styles from './PizzaList.module.css';

function PizzaList({ children }) {
  return (
    <>
      <ul className={styles.list}>{children}</ul>
    </>
  );
}

export default PizzaList;

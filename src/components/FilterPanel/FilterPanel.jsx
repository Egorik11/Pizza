import styles from './FilterPanel.module.css';

const FilterPanel = ({ activeItem, onClick }) => {
  const filterItems = ['All', 'Meat', 'With Seafood', 'Vegetarian'];

  return (
    <ul className={styles.filterList}>
      {filterItems.map((item, index) => {
        return (
          <li
            key={index}
            className={
              activeItem === item
                ? `${styles.filterItem} ${styles.active}`
                : `${styles.filterItem}`
            }
            onClick={() => onClick(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default FilterPanel;

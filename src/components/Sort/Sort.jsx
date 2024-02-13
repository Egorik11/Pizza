import styles from './Sort.module.css';

function Sort({ value, onChangeSort }) {
  const data = [
    {
      value: '0',
      sort: 'Show featured items',
    },
    {
      value: '1',
      sort: 'Price: lowest first',
    },
    {
      value: '2',
      sort: 'Price: highest first',
    },
    {
      value: '3',
      sort: 'Show available',
    },
  ];

  return (
    <select
      className={styles.select}
      defaultValue={value}
      onChange={onChangeSort}
    >
      {data.map((item, index) => (
        <option key={index} value={item.value}>
          {item.sort}
        </option>
      ))}
    </select>
  );
}

export default Sort;

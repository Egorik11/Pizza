import { useState } from 'react';

import dataPizzas from '../dataPizzas.json';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import PizzaList from './components/PizzaList/PizzaList';
import Sort from './components/Sort/Sort';
import SearchInput from './components/SearchInput/SearchInput';
import FilterPanel from './components/FilterPanel/FilterPanel';

import styles from './App.module.css';

function App() {
  const [valueInput, setValueInput] = useState('');
  const [sortType, setSortType] = useState(0);
  const [activeFilterItem, setActiveFilterItem] = useState('All');

  const handleChangeInput = (e) => {
    setValueInput(e.target.value);
  };

  const handleChangeSort = (e) => {
    setSortType(e.target.value);
  };

  const handleClickFilter = (item) => {
    setActiveFilterItem(item);
  };

  return (
    <>
      <Header />
      <main className={styles.content}>
        <h1 className={styles.title}>PIZZA</h1>
        <div className={styles.sortPanel}>
          <FilterPanel
            activeItem={activeFilterItem}
            onClick={handleClickFilter}
          />
          <div className={styles.searchSortPanel}>
            <Form>
              <SearchInput
                value={valueInput}
                onChange={handleChangeInput}
                placeholder='Type name Pizza'
              />
            </Form>
            <Sort value={sortType} onChangeSort={handleChangeSort} />
          </div>
        </div>
        <PizzaList
          dataPizzas={dataPizzas}
          searchParams={valueInput}
          sortType={sortType}
          filterParams={activeFilterItem}
        />
      </main>
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import PizzaList from './components/PizzaList/PizzaList';
import Sort from './components/Sort/Sort';
import SearchInput from './components/SearchInput/SearchInput';
import FilterPanel from './components/FilterPanel/FilterPanel';
import Spinner from './components/Spinner/Spinner';

import styles from './App.module.css';

function App() {
  const [dataPizzas, setDataPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [valueInput, setValueInput] = useState('');
  const [sortType, setSortType] = useState(0);
  const [activeFilterItem, setActiveFilterItem] = useState('All');

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          'https://65ce5d66c715428e8b409705.mockapi.io/pizza',
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setDataPizzas(data);
      } catch (error) {
        console.error(`Error ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApi();
  }, []);

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
        {isLoading ? (
          <Spinner />
        ) : (
          <PizzaList
            dataPizzas={dataPizzas}
            searchParams={valueInput}
            sortType={sortType}
            filterParams={activeFilterItem}
          />
        )}
      </main>
    </>
  );
}

export default App;

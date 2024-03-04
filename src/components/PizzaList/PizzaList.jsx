import { Box, Grid } from '@mui/material';
import PizzaItem from '../PizzaItem/PizzaItem';

import styles from './PizzaList.module.css';

const PizzaList = ({ dataPizzas, searchParams, sortType, filterParams }) => {
  const filteredSearch = searchParams
    ? dataPizzas.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchParams.toLowerCase()),
      )
    : dataPizzas;

  let sortedList;

  switch (sortType) {
    case '0':
      sortedList = filteredSearch;
      break;
    case '1':
      sortedList = filteredSearch
        .slice()
        .sort((a, b) => a.unitPrice - b.unitPrice);
      break;
    case '2':
      sortedList = filteredSearch
        .slice()
        .sort((a, b) => b.unitPrice - a.unitPrice);
      break;
    case '3':
      sortedList = filteredSearch.filter((item) => item.soldOut);
      break;
    default:
      sortedList = filteredSearch;
  }

  const showFilteredItems =
    filterParams !== 'All'
      ? sortedList.filter((item) => item.type === filterParams)
      : sortedList;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {showFilteredItems.map((pizza) => {
            return <PizzaItem key={pizza.id} pizza={pizza} />;
          })}
        </Grid>
      </Box>
    </>
  );
};

export default PizzaList;

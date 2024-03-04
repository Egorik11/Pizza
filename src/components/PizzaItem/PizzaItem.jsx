import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import Button from '../Button/Button';
import NumberInput from '../NumberInput/NumberInput';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const PizzaItem = ({ pizza }) => {
  const { state, dispatch } = useContext(CartContext);

  const handleClick = () => {
    dispatch({
      type: 'ADD_PIZZA',
      payload: pizza,
    });
  };

  const isExist = state.items.find((item) => item.id === pizza.id);

  return (
    <>
      <Grid item xs={6}>
        <Card sx={{ display: 'flex', boxShadow: 'none' }}>
          <CardMedia
            component='img'
            sx={{ width: 140 }}
            image={pizza.imageUrl}
            alt='Live from space album cover'
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
              <Typography sx={{ display: 'flex' }} component='div' variant='h5'>
                {pizza.name}
              </Typography>
              <Typography variant='p' color='text.secondary' component='div'>
                {pizza.ingredients.join(', ')}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default PizzaItem;

{
  /* <li className={styles.pizza}>
  <img src={pizza.imageUrl} className={styles.pizza__image} />
  <div className={styles.pizza__info}>
    <p className={styles.pizza__name}>{pizza.name}</p>
    <p className={styles.pizza__ingredients}>{pizza.ingredients.join(', ')}</p>
    <div className={styles.pizza__actions}>
      <p className={styles.pizza__price}>€{pizza.unitPrice}</p>
      {pizza.soldOut ? (
        isExist ? (
          <NumberInput state={state} pizza={pizza} dispatch={dispatch} />
        ) : (
          <Button onClick={handleClick}>Add to cart</Button>
        )
      ) : (
        'Sold out'
      )}
    </div>
  </div>
</li>; */
}

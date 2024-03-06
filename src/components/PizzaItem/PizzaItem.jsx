import { useContext, useState } from 'react';
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
  const [showAllIngredients, setShowAllIngredients] = useState(false);

  const handleShowIngredients = () => {
    setShowAllIngredients(!showAllIngredients);
  };

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
        <Card
          sx={{
            display: 'flex',
            boxShadow: 'none',
            borderRadius: '8px',
          }}
        >
          <CardMedia
            component='img'
            sx={{ width: 140 }}
            image={pizza.imageUrl}
            alt='Live from space album cover'
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <CardContent
              sx={{ flex: '1 0 auto', textAlign: 'left', padding: '8px' }}
            >
              <Typography
                sx={{ display: 'flex', fontFamily: 'Mulish' }}
                component='div'
                variant='h5'
              >
                {pizza.name}
              </Typography>
              <Typography
                onClick={handleShowIngredients}
                variant='p'
                color='text.secondary'
                component='div'
                sx={{ fontFamily: 'Mulish', fontSize: '15px' }}
              >
                {showAllIngredients
                  ? pizza.ingredients.join(', ')
                  : pizza.ingredients.length > 4
                  ? `${pizza.ingredients.slice(0, 4).join(', ')} ...`
                  : pizza.ingredients.join(', ')}
              </Typography>
            </CardContent>
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0px 16px 16px',
              }}
            >
              <Typography sx={{ fontFamily: 'Mulish' }} variant='subtitle1'>
                €{pizza.unitPrice}
              </Typography>
              {pizza.soldOut ? (
                isExist ? (
                  <NumberInput
                    state={state}
                    pizza={pizza}
                    dispatch={dispatch}
                  />
                ) : (
                  <Button onClick={handleClick}>Add to cart</Button>
                )
              ) : (
                'Sold out'
              )}
            </Card>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default PizzaItem;

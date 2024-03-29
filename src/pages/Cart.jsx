import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { NavLink } from 'react-router-dom';
import Button from '../components/Button/Button';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartProvider';
import CounterPizza from '../components/CounterPizza/CounterPizza';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const [showAllIngredients, setShowAllIngredients] = useState(false);

  const handleShowIngredients = () => {
    setShowAllIngredients(!showAllIngredients);
  };

  const handleClickDeletePizza = (pizza) => {
    dispatch({
      type: 'DELETE_PIZZA',
      payload: pizza,
    });
  };

  return (
    <>
      <Container sx={{ padding: '20px 10px!important' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ margin: '0px' }}
        >
          {state.items.map((pizza) => {
            return (
              <Grid key={pizza.id} item xs={6}>
                <Card
                  sx={{
                    display: 'flex',
                    boxShadow: 'none',
                    borderRadius: '8px',
                    minWidth: '420px',
                  }}
                >
                  <CardMedia
                    component='img'
                    sx={{ width: 100 }}
                    image={pizza.imageUrl}
                    alt='Live from space album cover'
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
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
                      <Typography
                        sx={{ fontFamily: 'Mulish' }}
                        variant='subtitle1'
                      >
                        €{pizza.unitPrice}
                      </Typography>
                      <CounterPizza
                        state={state}
                        pizza={pizza}
                        dispatch={dispatch}
                      />
                      <Button onClick={() => handleClickDeletePizza(pizza)}>
                        Delete
                      </Button>
                    </Card>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        {state.items.length === 0 ? (
          <>
            <Typography>You don't have an item in your cart yet.</Typography>
            <NavLink to={'/'}>
              <Button>Go home</Button>
            </NavLink>
          </>
        ) : (
          <NavLink to={'/'}>
            <Button>Continue shopping</Button>
          </NavLink>
        )}
      </Container>
    </>
  );
};

export default Cart;

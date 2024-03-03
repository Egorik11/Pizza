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
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleClickDeletePizza = (pizza) => {
    dispatch({
      type: 'DELETE_PIZZA',
      payload: pizza,
    });
  };

  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {state.items.map((item) => (
          <Card key={item.id} sx={{ width: 250 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.imageUrl}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {item.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {item.ingredients.join(', ')}
              </Typography>
              <Button onClick={() => handleClickDeletePizza(item)}>
                Delete Pizza
              </Button>
            </CardContent>
          </Card>
        ))}
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
          <Button>Go home</Button>
        </NavLink>
      )}
    </Container>
  );
};

export default Cart;

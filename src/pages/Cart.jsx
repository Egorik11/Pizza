import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { useContext } from 'react';
import { CartContext } from '../App';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button/Button';

function Cart() {
  const { cartItem } = useContext(CartContext);

  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cartItem.map((item) => (
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
            </CardContent>
          </Card>
        ))}
      </Grid>
      {cartItem.length === 0 ? (
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
}

export default Cart;

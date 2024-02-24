import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { useContext } from 'react';
import { CartContext } from '../App';
import { NavLink } from 'react-router-dom';

function Cart() {
  const { cartItem } = useContext(CartContext);

  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cartItem.map((item) => (
          <Card key={item.id} sx={{ width: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.imageUrl}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {item.name} {/* Используйте данные из объекта item */}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {/* Используйте данные из объекта item */}
                {item.ingredients.join(', ')}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
      {cartItem.length === 0 ? (
        <>
          <Typography>You don't have an item in your cart yet.</Typography>
          <NavLink to={'/'}>
            <Button>go home</Button>
          </NavLink>
        </>
      ) : (
        <NavLink to={'/'}>
          <Button>go home</Button>
        </NavLink>
      )}
    </Container>
  );
}

export default Cart;

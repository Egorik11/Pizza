import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import CartImg from '/src/assets/images/Cart.svg';
import styles from './Cart.module.css';
import { CartContext } from '../../context/CartProvider';

const Cart = () => {
  const { state } = useContext(CartContext);

  return (
    <>
      <NavLink to={'/cart'}>
        <IconButton>
          <Badge badgeContent={state.totalItems} color='success'>
            <div className={styles.cart}>
              <img src={CartImg} alt='Shopping cart' />
            </div>
          </Badge>
        </IconButton>
      </NavLink>
    </>
  );
};

export default Cart;

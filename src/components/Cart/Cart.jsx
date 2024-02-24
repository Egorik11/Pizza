import { Badge, IconButton } from '@mui/material';

import CartImg from '/src/assets/images/Cart.svg';

import styles from './Cart.module.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { BadgeContext } from '../../App';

function Cart() {
  const { countBadge } = useContext(BadgeContext);
  
  return (
    <>
      <NavLink to={'/cart'}>
        <IconButton>
          <Badge badgeContent={countBadge} color='success'>
            <div className={styles.cart}>
              <img src={CartImg} alt='Shopping cart' />
            </div>
          </Badge>
        </IconButton>
      </NavLink>
    </>
  );
}

export default Cart;
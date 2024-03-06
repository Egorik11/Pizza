import { NavLink } from 'react-router-dom';
import Logo from '/src/assets/images/Logo.svg';
import Person from '/src/assets/images/Person.svg';
import Button from '../Button/Button';
import Cart from '../Cart/Cart';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to={'/'}>
        <img src={Logo} alt='Pizza mania' />
      </NavLink>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to={'/login'}>
          <Button modeHeaderStyle>
            <img src={Person} alt='Person' />
          </Button>
        </NavLink>
        <Cart />
      </div>
    </div>
  );
};

export default Header;

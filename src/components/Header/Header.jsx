import Logo from '/src/assets/images/Logo.svg';
import Person from '/src/assets/images/Person.svg';

import Button from '../Button/Button';
import Cart from '../Cart/Cart';

import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <a href=''>
        <img src={Logo} alt='Pizza mania' />
      </a>
      <Button modeHeaderStyle>
        <img src={Person} alt='Person' />
      </Button>
      <Cart />
    </div>
  );
}

export default Header;

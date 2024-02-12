import Logo from '/src/assets/images/Logo.svg';
import Cart from '/src/assets/images/Cart.svg';

import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <a href=''>
        <img src={Logo} alt='Pizza mania' />
      </a>
      <img src={Cart} alt='Shopping cart' />
    </div>
  );
}

export default Header;

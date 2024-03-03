import { useContext, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import { Drawer, TextField, Typography } from '@mui/material';

import Logo from '/src/assets/images/Logo.svg';
import Person from '/src/assets/images/Person.svg';
import Button from '../Button/Button';
import Cart from '../Cart/Cart';
import { LoginContext } from '../../App';

import styles from './Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const { userLogin, setUserLogin } = useContext(LoginContext);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserLogin((prevUserLogin) => {
      const newUser = { id: uuidv4(), userName, userEmail };

      const isDuplicate = prevUserLogin.some(
        (item) => item.userEmail === userEmail,
      );

      return isDuplicate ? prevUserLogin : [...prevUserLogin, newUser];
    });

    setUserName('');
    setUserEmail('');
  };

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleClickLogOut = () => {
    setUserLogin([]);
  };

  return (
    <div className={styles.header}>
      <NavLink to={'/'}>
        <img src={Logo} alt='Pizza mania' />
      </NavLink>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={toggleDrawer} modeHeaderStyle>
          <img src={Person} alt='Person' />
        </Button>
        {userLogin.length === 0 ? (
          <Drawer
            style={{ width: '600px' }}
            anchor='right'
            open={open}
            onClose={toggleDrawer}
          >
            <div role='presentation'>
              <Typography>Sign in</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={userName}
                  onChange={handleChangeName}
                  label='User name'
                  variant='standard'
                />
                <TextField
                  value={userEmail}
                  onChange={handleChangeEmail}
                  label='User email'
                  variant='standard'
                />
                <Button type='submit'>Submit</Button>
              </form>
            </div>
          </Drawer>
        ) : (
          <Drawer
            style={{ width: '600px' }}
            anchor='right'
            open={open}
            onClose={toggleDrawer}
          >
            <div role='presentation'>
              <Typography sx={{ fontSize: 20 }}>
                {userLogin[0].userName}
              </Typography>
              <Button onClick={handleClickLogOut} type='submit'>
                Log out
              </Button>
            </div>
          </Drawer>
        )}
        <Cart />
      </div>
    </div>
  );
};

export default Header;

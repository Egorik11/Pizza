import { createContext, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

export const CartContext = createContext(null);
export const BadgeContext = createContext(null);
export const LoginContext = createContext(null);

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [countBadge, setCountBadge] = useState(0);
  const [userLogin, setUserLogin] = useState([]);

  return (
    <LoginContext.Provider value={{ userLogin, setUserLogin }}>
      <CartContext.Provider value={{ cartItem, setCartItem }}>
        <BadgeContext.Provider value={{ countBadge, setCountBadge }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BadgeContext.Provider>
      </CartContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;

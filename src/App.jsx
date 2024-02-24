import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { createContext, useState } from 'react';

export const CartContext = createContext(null);
export const BadgeContext = createContext(null);

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [countBadge, setCountBadge] = useState(0);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      <BadgeContext.Provider value={{ countBadge, setCountBadge }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BadgeContext.Provider>
    </CartContext.Provider>
  );
}

export default App;

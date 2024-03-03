import { createContext, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

export const LoginContext = createContext(null);

const App = () => {
  const [userLogin, setUserLogin] = useState([]);

  return (
    <LoginContext.Provider value={{ userLogin, setUserLogin }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </LoginContext.Provider>
  );
};

export default App;

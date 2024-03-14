import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
import Header from './components/Header/Header';

const HomeLazy = lazy(() => import('./pages/Home'));
const CartLazy = lazy(() => import('./pages/Cart'));
const LoginLazy = lazy(() => import('./pages/Login'));
const NotFoundLazy = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<HomeLazy />} />
          <Route path='/cart' element={<CartLazy />} />
          <Route path='/login' element={<LoginLazy />} />
          <Route path='*' element={<NotFoundLazy />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

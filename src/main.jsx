import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
);

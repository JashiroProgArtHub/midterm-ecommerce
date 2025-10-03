import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './context/CartContext'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-j710ku5i2260zu6e.us.auth0.com"
    clientId="SpKQZMZ7V1EOhQx7vM9HHhvfUpU8aWxw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <CartProvider>   
      <App />
    </CartProvider>
  </Auth0Provider>,
);


reportWebVitals();

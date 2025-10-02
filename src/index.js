import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './context/CartContext'; // ✅ import this



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-j710ku5i2260zu6e.us.auth0.com"
    clientId="SpKQZMZ7V1EOhQx7vM9HHhvfUpU8aWxw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <CartProvider>   {/* ✅ wrap App here */}
      <App />
    </CartProvider>
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

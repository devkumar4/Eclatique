import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import store from './red/store/store.ts';

// Load Stripe.js outside of the component render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51MiYaMSGmOVP0oukEjTPz4Hvbmgt4X2EljXF1g2oN8vJQ3AnwR8JJyvvezc5w58HOHNGSf29d8kwADMyv5spsAmQ00u9rtucx8");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </React.StrictMode>
  </Provider>
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';
import './styles.scss';
import { CookiesProvider } from 'react-cookie';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <CookiesProvider >
      <App />
    </CookiesProvider>
  </Provider>
);

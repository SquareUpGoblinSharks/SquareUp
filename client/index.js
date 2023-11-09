import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';
import './styles.scss';

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

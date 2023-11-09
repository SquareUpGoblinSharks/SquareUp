import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';
import './styles.scss';
const multer = require('multer'); 

const root = createRoot(document.getElementById('root'));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public');
  },
  filename: (req, file, cb) => {
    // console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

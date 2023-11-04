const express = require('express');
const path = require('path');
const app = express();

const router = require('./routers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/routers', router);

app.use('/')

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

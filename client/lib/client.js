const axios = require('axios');

const client = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {'Content-type': 'application/json'}
})


module.exports = client;
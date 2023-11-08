const axios = require('axios');

const client = axios.create({
  baseUrl: 'http://localhost:8000',
  withCredentials: false,
})


module.exports = client;
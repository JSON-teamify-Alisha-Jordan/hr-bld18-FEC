/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const axios = require('axios');
const API_KEY = require('../config');

const port = 3000;
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.all('*', (req, res) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld${req.url}`,
    data: req.body,
    method: req.method,
    headers: {
      Authorization: API_KEY,
    },
  };

  axios(options)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`hello from the server on port ${port}`);
});

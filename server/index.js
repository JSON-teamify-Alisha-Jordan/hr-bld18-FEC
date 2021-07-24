/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const port = 3000;

const app = express();

app.use(express.json());

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

// routes

app.listen(port, () => {
  console.log('hello from the server on port 3000');
});

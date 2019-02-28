'use strict';

const express = require('express');
const app = express();
const PORT = 3000;


app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html');
});

app.get('/about', (req, res) => {
  res.send(`<h1>This is about ${req.query.name}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  'input' in req.query?
  res.json({'received': req.query.input, 'result': req.query.input*2}):
  res.json({"error": "Please provide an input!"});
});

app.get('/greeter', (req, res) => {
  'name' in req.query && 'title' in req.query?
  res.json({"welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`}):
  'name' in req.query?
  res.json({"error": `Please provide a title!`}):
  'title' in req.query?
  res.json({"error": `Please provide a name!`}):
  res.json({"error": `Please provide a name and a title!`});
});

app.get('/appenda', )

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
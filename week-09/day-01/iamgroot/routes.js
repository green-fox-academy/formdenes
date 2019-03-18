const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  'message' in req.query?
  res.json({received: req.query.message, translated: 'I am Groot!'}):
  res.json({error: 'I am Groot!'});
});

module.exports = app;
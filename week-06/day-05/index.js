const express = require('express');
const app = express();
const PORT = 3000;

//import {imageLinks} from './static/js/images';

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

// home page
app.get('/', (req, res) => {
// render `home.ejs`
const imageLinks = [
  '/static/images/triangle01.png',
  '/static/images/triangle02.png',
  '/static/images/triangle03.png',
  '/static/images/triangle04.png',
  '/static/images/triangle05.png',
  '/static/images/triangle06.png',
  '/static/images/triangle07.jpg',
  '/static/images/triangle08.jpg',
  '/static/images/triangle09.jpg',
  '/static/images/triangle10.jpg',
];

res.render('home',{imageLinks: imageLinks});
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
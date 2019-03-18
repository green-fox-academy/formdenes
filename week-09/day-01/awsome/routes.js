'use strict';

const express = require('express');
const app = express();

let data = {
  0: {
    author: 'Iron Butterfly',
    title: 'In-A-Gadda-Da-Vida',
    genre: 'rock',
    year: 1968,
    rating: 4.2
  },
  1: {
    author: 'Hot Fuss',
    title: 'Somebdy Told Me',
    genre: 'pop',
    year: 2003,
    rating: 3.7
  },
  2: {
    author: 'The Beatles',
    title: 'Hey Jude',
    genre: 'rock',
    year: 1968,
    rating: 4.7
  },
  3: {
    author: '50 Cent',
    title: 'Peep Show',
    genre: 'rap',
    year: 2007,
    rating: 4.3
  },
  4: {
    author: 'The Beatles',
    title: 'Something',
    genre: 'rock',
    year: 1969,
    rating: 4.5
  }
}

app.get('/awsome', (req, res) => {
  // TODO: implement this method
  res.json(data);
});

app.post('/awsome', (req, res) => {
  if (!('author' in req.query) ||
    !('title' in req.query)) {      
    res.send('No or wrong query');
  } else {

    let author = req.query.author;
    let title = req.query.title;
    let genre = req.query.genre || '-';
    let year = req.query.year || '-';
    let rating = req.query.rating || 0;
    let index = Object.keys(data).length;    
    data[index] = {};
    data[index].author = author;
    data[index].title = title;
    data[index].genre = genre;
    data[index].year = year;
    data[index].year = year;
    data[index].rating = rating;
    res.json(data);
  }
})

app.delete('/awsome', (req, res) => {
  if (!('title' in req.query)) {
    res.send('No or wrong query');
  } else {
    let title = req.query.title;
    let index = Object.keys(data).length;    
    data[index] = {};
    data[index].author = author;
    data[index].title = title;
    data[index].genre = genre;
    data[index].year = year;
    data[index].year = year;
    data[index].rating = rating;
    res.json(data);
  }
})

module.exports = app;
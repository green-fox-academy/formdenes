'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

//connect to database
//reset database to original values
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

let errorMsg = 'No or wrong query';

test('/awsome GET endpoint tests', (t) => {
  request(app)
    .get('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
      t.same(res.body, data, 'endpoint')
    });
    t.end();
});

test('/awsome POST endpoint tests', (t) => {
  // With no query
  request(app)
    .post('/awsome')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;      
      //check if we got the right playlist back;
      t.equal(res.text, errorMsg, 'POST endpoint with no query');
    });// with wrong query
    request(app)
    .post('/awsome?author="Fuck this shit"')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
      t.equal(res.text, errorMsg, 'POST endpoint with wrong query');
    });
    //with right query
    request(app)
    .post('/awsome?author=New author&title=New title')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
      t.same(res.body,{
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
        },
      5: {
        author: 'New author',
        title: 'New title',
        genre: '-',
        year: '-',
        rating: 0
      }}, 'POST endpoint with right query');
    });
    t.end();
});
/*
test('/awsome DELETE endpoint tests', (t) => {
  // With no query
  request(app)
    .delete('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
      t.same(res.body, errorMsg, 'endpoit with no query');
    });
    // with wrong query
    request(app)
    .delete('/awsome?titl="New title"')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
      t.same(res.body, errorMsg, 'endpoit with wrong query');
    });
    //with right query
    request(app)
    .delete('/awsome?title="New title"')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
      t.same(res.body, data, 'endpoit with right query');
    });
    t.end();
});
/* 
test('/awsome PUT endpoint tests', (t) => {
  // With no query
  request(app)
    .put('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
  // with wrong query
  request(app)
    .put('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
  //with right query
  request(app)
    .put('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
    t.end();
});

test('/awsome/favorite GET endpoint tests', (t) => {
  // With no query
  request(app)
    .get('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
  // with wrong query
  request(app)
    .get('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
  //with right query
  request(app)
    .get('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
    t.end();
});

test('/awsome/same GET endpoint tests', (t) => {
  // With no query
  request(app)
    .get('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
  // with wrong query
  request(app)
    .get('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
  //with right year query
  request(app)
    .get('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
  //with right author query
  request(app)
    .get('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
  //with right genre query
  request(app)
    .get('/awsome')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      //check if we got the right playlist back;
    });
    t.end();
}); */
'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  // TODO: implement it 
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      const expectedThings = {error: 'I am Groot!'};
      const actualThings = res.body;

      t.same(actualThings, expectedThings, 'Groot endpoint with no query');
    });
    request(app)
    .get('/groot?message=somemessage')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      const expectedThings = {"received": "somemessage",
      "translated": "I am Groot!"};
      const actualThings = res.body;

      t.same(actualThings, expectedThings, 'Groot endpoint with query');
    });
    request(app)
    .get('/groot?messge=somemessage')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      const expectedThings = {error: 'I am Groot!'};
      const actualThings = res.body;

      t.same(actualThings, expectedThings, 'Groot endpoint with wrong query');
    });
    t.end();
});
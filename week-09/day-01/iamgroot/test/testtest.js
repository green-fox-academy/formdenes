'use strict';

const test = require('tape');
const request = require('supertest');
const express = require('express');
const app = express();

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'tobi' });
});

test('test endpoint', (t) => {
  // TODO: implement it 
  request(app)
    .get('/user')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      const expectedThings = {
        name: 'tobi'
      };
      const actualThings = res.body;

      t.same(actualThings, expectedThings, 'test endpoint');
      t.end();
    });
});

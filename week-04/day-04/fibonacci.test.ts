'use strict';

import {fibonacci} from '../../week-03/day-04/fibonacci';
const test = require('tape');

test('Fibonacci sequence member', t=> {
  let actual1:number = fibonacci(0);
  let expercted1:number = 0;
  let actual2:number = fibonacci(1);
  let expercted2:number = 1;
  let actual3:number = fibonacci(2);
  let expercted3:number = 1;

  t.equal(actual1, expercted1);
  t.equal(actual2, expercted2);
  t.equal(actual3, expercted3);
  t.end();
});

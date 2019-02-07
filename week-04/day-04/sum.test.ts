'use strict';

import {Sum} from './sum';
const test = require('tape');

test('Getting sum', t => {
  const sum: Sum = new Sum;
  const list:number[]=[1,2,3,4];
  let actual:number = sum.getSum(list);
  let expected:number = 10;

  t.equal(actual, expected);
  t.end();
});
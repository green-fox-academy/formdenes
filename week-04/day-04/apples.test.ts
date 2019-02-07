'use strict';

import {Apple} from './apples';
const test = require('tape');

test ('Getting apples', t => {
  const apple: Apple = new Apple;
  const actual:string = apple.getApple();
  const expected:string = 'apple'

  t.equal(actual, expected);
  t.end();
})
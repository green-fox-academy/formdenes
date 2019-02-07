'use strict';

import {countLetters} from './count-letters';
const test = require('tape');

test('Counting letters', t => {
  let actual: {[key:string]: number} = countLetters('ekk hhh');
  let expected: {[key:string]: number} = {e: 1, k: 2, h: 3};

  t.deepEqual(actual, expected);
  t.end();
});
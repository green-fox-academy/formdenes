'use strict';

import { test } from 'tape';
import { addNum, subtractNum } from './operations';

test('add 2 numbers', t => {
  const actual = addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('subtract 2 numbers', t => {
  t.equal(subtractNum(2, 1), 1);
  t.end();
})
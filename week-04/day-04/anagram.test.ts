'use strict';

import { isAnagram } from './anagram';
const test = require('tape');

test('Is anagram?', t => {
  let actual1 = isAnagram('alma', 'mala');
  let expected1 = true;
  let actual2 = isAnagram('ala', 'mala');
  let expected2 = false;

  t.equal(actual1, expected1);
  t.equal(actual2, expected2);
  t.end();
});
'use strict';

import { test } from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 2 is 4', function (t: any): any {
  t.equal(add(2, 2), 4);
  t.end();
});

test('add: 1 and 3 is 4', function (t: any): any {
  t.equal(add(1, 3), 4);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(4, 3, 5), 5);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([7, 5, 3, 4]), 4.5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('is vowel:  é', function (t: any): any {
  t.ok(isVowel('é'));
  t.end();
});

test('is vowel: í', function (t: any): any {
  t.ok(isVowel('í'));
  t.end();
});

test("is vowel: 9", function(t: any): any {
  t.notOk(isVowel("9"));
  t.end();
});

test('translate: anyád', function (t: any): any {
  t.equal(translate('anyád'), 'avanyávád');
  t.end();
});

test('translate: fákmí', function (t: any): any {
  t.equal(translate('fákmí'), 'fávákmíví');
  t.end();
});
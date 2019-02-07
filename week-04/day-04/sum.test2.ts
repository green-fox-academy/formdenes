'use strict';

import {Sum} from './sum';
const test = require('tape');

test('Getting sum', t => {
  const sum: Sum = new Sum;
  const list1:number[]=[];
  const list2:number[]=[1];
  const list3:number[]=[1,2,3,4];
  //const list4:number[]=null;
  const list5:string='fuck with me';
  let actual1:number = sum.getSum(list1);
  let expected1:number = null;
  let actual2:number = sum.getSum(list2);
  let expected2:number = 1;
  let actual3:number = sum.getSum(list3);
  let expected3:number = 10;
  //let actual4:number = sum.getSum(list4);
  //let expected4:number = null;
  //let actual5:number = sum.getSum(list5);
  //let expected5 = 'fuckwithme';

  t.equal(actual1, expected1);
  t.equal(actual2, expected2);
  t.equal(actual3, expected3);
  //t.equal(actual4, expected4);
  //t.equal(actual5, expected5);
  t.end();
});
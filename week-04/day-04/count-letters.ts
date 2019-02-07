'use strict';

export const countLetters = (text:string) => {
  let dictionary: {[k:string]: number} = {};
  let arr= text.toLowerCase().split('').filter(v => v !== ' ');
  arr.forEach((v, i, a) => {
    dictionary[v] = a.filter(val => val === v).length;
  });
  return dictionary;
}
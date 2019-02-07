'use strict';

export const isAnagram = (text1:string, text2:string) => {
  let arr1 = text1.toLowerCase().split('').filter(v => v !== ' ');
  let arr2 = text2.toLowerCase().split('').filter(v => v !== ' ');
  return arr1.every((v, i, a) => {
    return a.filter(val => val === v).length === arr2.filter(val => val === v).length && arr1.length === arr2.length;
  })
}
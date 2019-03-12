  
'use strict';

const mapWith = (array, callback) => {
  let output = [];
  array.forEach(v=>output.push(callback(v)))

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output;
}

function MapWith (array, callback) {
  let output = [];
  array.forEach(function (value) {
    output.push(callback(value))
  });
  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log('exercise 1',mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (str) => {
  let myArr = str.split('');
  let removedArr = myArr.filter((v,i) => i%2 !==1);
  return removedArr.join('');
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
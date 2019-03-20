'use strict';

require('es6-promise');

var promise = Promise.reject(new Error('I DID NOT FIRE!'));

function onRejected (error) {
  console.log(error.message)
}

promise.then(console.log).catch(onRejected);

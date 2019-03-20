'use strict';

const URL = 'http://api.icndb.com/jokes/random';

const button = document.querySelector('button');
const jokeField = document.querySelector('p');

button.onclick = ((e) => {
  fetch(URL)
    .then(response => response.json())
    .then(myJson => jokeField.textContent = myJson.value.joke);
})
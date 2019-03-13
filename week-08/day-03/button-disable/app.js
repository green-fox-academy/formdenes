'use strict';


const formField = document.querySelector('.form-field');

const factsButton = document.querySelector('.facts-button');

const signUpButton = document.querySelector('.sign-up-button');

let pet = '';
let facts = '';
const normalAlert = 'Thank you you\'ve succesfully signed up for cat facts';
const fishAlert = 'Sigh, we still added you to the cat facts list';

formField.onclick = (e) => {
  e.target.id == 'dog'? pet = 'dog': e.target.id == 'cat'? pet = 'cat': e.target.id == 'fish'? pet = 'fish':null;
  e.target.id == 'yes'? facts = 'yes': e.target.id == 'no'? facts = 'no':null;
  
  facts == 'yes'? factsButton.disabled = false: facts == 'no'? factsButton.disabled = true:null;
  pet =='dog' || pet == 'cat'? 
  signUpButton.disabled = false: pet == 'fish' && facts == 'no'? (signUpButton.disabled = false, factsButton.disabled = true
  ):facts == 'yes' || facts == ''? signUpButton.disabled = true:null;
  e.target.classList.contains('facts-button')? alert(normalAlert):null;
  e.target.classList.contains('sign-up-button') && pet == 'fish'? alert(fishAlert):e.target.classList.contains('sign-up-button')? alert(normalAlert):null;
}

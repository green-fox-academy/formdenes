'use strict';

const buttons = document.querySelector('.buttons');

buttons.querySelector('.delete-option').addEventListener('mouseenter', (e) => {
  //console.log(e.target);
  if (buttons.querySelector('.delete-action').classList.contains('hide')){
    buttons.querySelector('.delete-action').classList.remove('hide');
  }
});

buttons.querySelector('.delete-action').addEventListener('click', (e) => {
  //console.log(e.target);
  if (buttons.querySelector('.delete-check').classList.contains('hide')){
    buttons.querySelector('.delete-check').classList.remove('hide');
  }
});

buttons.onclick = (e) => {
  console.log ();
  if (e.target.parentElement.classList.contains('delete-option') || e.target.parentElement.parentElement.classList.contains('delete-option')){
    const deleteB = buttons.querySelector('.delete-action');
    const checkB = buttons.querySelector('.delete-check');
    checkB.classList.add('hide');
    deleteB.classList.toggle('hide');
  }
}
'use strict';

const buttons = document.querySelector('.buttons');

const deleteButton = buttons.querySelector('.delete-action');
const deleteButtonLabel = buttons.querySelector('.delete-action .label');
const checkButton = buttons.querySelector('.delete-check');
const checkButtonLabel = buttons.querySelector('.delete-check .label');
buttons.querySelector('.delete-option').addEventListener('mouseenter', (e) => {
  deleteButton.classList.remove('hide');
  deleteButtonLabel.classList.remove('hide');
  if (buttons.querySelector('.delete-action').classList.contains('hide')){
    buttons.querySelector('.delete-action').classList.remove('hide');
  }
});

buttons.querySelector('.delete-action').addEventListener('click', (e) => {
  //console.log(e.target);
  checkButton.classList.remove('hide');
  checkButtonLabel.classList.remove('hide')
});

buttons.onclick = (e) => {
  console.log ();
  if (e.target.parentElement.classList.contains('delete-option') || e.target.parentElement.parentElement.classList.contains('delete-option')){
    checkButton.classList.add('hide');
    checkButtonLabel.classList.add('hide');
    deleteButton.classList.toggle('hide');
    deleteButtonLabel.classList.toggle('hide');
  }
}
'use strict';
import {actions} from './todo-actions';
import {questions} from './todo-questions';

const readLineSync = require('readline-sync');
const fs = require('fs');

const path:string = './list-of-todos.txt';

const todoApp = actions(path);
const questioner = questions();
let running:boolean = true;

while(running){
  switch (questioner.getCommandFromQuestion()){
    case '': {
      todoApp.help();
      break;
    }
    case '-l':
    case 'list':{
      todoApp.list();
      break;
    }
    case '-a':
    case 'add':{
      todoApp.add();
      break;
    }
    case '-r':
    case 'remove':{
      todoApp.edit('remove');
      break;
    }
    case '-c':
    case 'check':{
      todoApp.edit('check');
      break;
    }
    case '-e':
    case 'exit':{
      running = todoApp.exit();
      break;
    }
    default: {
      todoApp.def();
    }
  }
}


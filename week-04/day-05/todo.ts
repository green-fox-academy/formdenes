'use strict';
import {TodoApp} from './todo-class';

const readLineSync = require('readline-sync');
const fs = require('fs');

const path:string = './list-of-todos.txt';

const todoApp = new TodoApp(path);

while(todoApp.running){
  switch (todoApp.init()){
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
      todoApp.remove();
      break;
    }
    case '-c':
    case 'check':{
      todoApp.check();
      break;
    }
    case '-e':
    case 'exit':{
      todoApp.exit();
      break;
    }
    default: {
      todoApp.def();
    }
  }
}


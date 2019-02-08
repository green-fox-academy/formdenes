'use strict';
import {actions} from './todo-actions';
import {questions} from './todo-questions';
import {print} from './todo-print';

const path:string = './list-of-todos.txt';

let running:boolean = true;

while(running){
  let todoApp = actions(path);
  let questioner = questions();
  let printer = print();
  switch (questioner.getCommandFromQuestion()){
    case '': {
      printer.printAction(todoApp.help());
      break;
    }
    case '-l':
    case 'list':{
      printer.printAction(todoApp.list());
      break;
    }
    case '-a':
    case 'add':{
      printer.printAction(todoApp.add());
      break;
    }
    case '-r':
    case 'remove':{
      printer.printAction(todoApp.edit('remove'));
      break;
    }
    case '-c':
    case 'check':{
      printer.printAction(todoApp.edit('check'));
      break;
    }
    case '-e':
    case 'exit':{
      running = todoApp.exit();
      break;
    }
    default: {
      printer.printAction(todoApp.def());
    }
  }
}


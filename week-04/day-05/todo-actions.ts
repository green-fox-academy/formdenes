'use strict';

import {errorType} from './error-types';
import {errorMsg} from './error-msg';
import {msg} from './msg';
import {fileHandeling} from './todo-file-handeling';
import {questions} from './todo-questions';

const readLineSync = require('readline-sync');
const fs = require('fs');

export const actions = (path:string) => {
  const fileHandeler = fileHandeling(path);
  const questioner = questions();
  return {
    help(){
      console.log(msg.divider);
      console.log(msg.help);
      console.log(msg.divider);
    },
    list(){
      console.log(msg.divider);
      fileHandeler.getTodos.length !== 0? fileHandeler.printTodos() : console.log(msg.emptyList);
      console.log(msg.divider);
    },
    add(){
      console.log(msg.divider);
      let item = readLineSync.question(msg.add);
      if (item !== ''){
        fileHandeler.getText() === ''? fs.appendFileSync(path, `[ ] ${item}`) : fs.appendFileSync(path, `\n[ ] ${item}`);
        console.log(`\n${item} ${msg.addEnd}`);
      }
      else {console.log(errorType.add + errorMsg.noTask);}
      console.log(msg.divider);
    },
    edit(type:string){
      console.log(msg.divider);
    let item = questioner.getIndexFromQuestion(type);
    if (item!== 0){
      if (type === 'check'){
        fileHandeler.getTodos()[item-1] = '[x]' + fileHandeler.getTodos()[item-1].slice(3);
      }
      else if (type === 'remove'){
        fileHandeler.getTodos().splice(item-1, 1);        
      }
      console.log(`\n${item} ${msg[type+'End']}`);
      fs.writeFileSync(path, '');
      fileHandeler.getTodos().forEach((v, i) => i===0? fs.writeFileSync(path, v): fs.appendFileSync(path, `\n${v}`));    
    }
    console.log(msg.divider);
    },
    exit():boolean{
      return false;
    },
    def(){
      console.log(errorType.command);
    }

  }
}
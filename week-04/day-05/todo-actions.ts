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
    help():string {
      return msg.help;
    },
    list():string {
      return fileHandeler.getTodos().length !== 0? fileHandeler.getTodos().map((v, i) => `(${i+1}) - ${v}`).join('\n') : msg.emptyList;
    },
    add():string {
      let item = readLineSync.question(msg.add);
      if (item !== ''){
        fileHandeler.getText() === ''? fs.appendFileSync(path, `[ ] ${item}`) : fs.appendFileSync(path, `\n[ ] ${item}`);
        return `${item} ${msg.addEnd}`;
      }
      else {return (errorType.add + errorMsg.noTask);}
    },
    edit(type:string):string {
      let item = questioner.getIndexFromQuestion(type);
      if (typeof item === 'number'){
        if (type === 'check'){
          fileHandeler.getTodos()[item-1] = '[x]' + fileHandeler.getTodos()[item-1].slice(3);
        }
        else if (type === 'remove'){
          fileHandeler.getTodos().splice(item-1, 1);        
        }
        fs.writeFileSync(path, '');
        fileHandeler.getTodos().forEach((v, i) => i===0? fs.writeFileSync(path, v): fs.appendFileSync(path, `\n${v}`));    
        return (`${item} ${msg[type+'End']}`);
      }
      else {return item.toString();}
    },
    exit():boolean{
      return false;
    },
    def():string {
      return (errorType.command);
    }

  }
}
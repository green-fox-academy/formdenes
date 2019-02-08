'use strict';

import {errorType} from './error-types';
import {errorMsg} from './error-msg';
import {msg} from './msg';
import {fileHandeling} from './todo-file-handeling';

const path:string = './list-of-todos.txt'

const fileHanderler = fileHandeling(path);

const readLineSync = require('readline-sync');

export const questions = () => {
    return {
    getIndexFromQuestion(type:string): number{
      let item:number = Number(readLineSync.question(msg[type]));
      if (item>fileHanderler.getTodos().length){
        console.log(errorType[type] + errorMsg.outOfBound);
        return 0;
      }
      else if(item === 0){
        console.log(errorType[type] + errorMsg.noIndex);
        return 0;
      }
      else if(isNaN(item)){
        console.log(errorType[type] + errorMsg.notANumber);
        return 0;
      }
      else return item;
    },
    getCommandFromQuestion():string{
      return readLineSync.question(msg.init);
    }
  }
}
'use strict';

import {errorType} from './error-types';
import {errorMsg} from './error-msg';
import {msg} from './msg';
import {fileHandeling} from './todo-file-handeling';

const path:string = './list-of-todos.txt'

const readLineSync = require('readline-sync');

export const questions = () => {
  let fileHanderler = fileHandeling(path);
    return {
    getIndexFromQuestion(type:string){
      let item:number = Number(readLineSync.question(msg[type]));
      if (item>fileHanderler.getTodos().length){
        return (errorType[type] + errorMsg.outOfBound);
      }
      else if(item === 0){
        return errorType[type] + errorMsg.noIndex;
      }
      else if(isNaN(item)){
        return errorType[type] + errorMsg.notANumber;
      }
      else return item;
    },
    getCommandFromQuestion():string{
      return readLineSync.question(msg.init);
    }
  }
}
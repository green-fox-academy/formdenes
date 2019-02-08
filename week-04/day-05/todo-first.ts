'use strict';

const readLineSync = require('readline-sync');
const fs = require('fs');

const path:string = './list-of-todos.txt';

let text:string;
let todos:string[];
let command: string;
const init = () => {
  text = fs.readFileSync(path, 'utf8');
  todos = text === ''? [] : text.split('\n');
  return command = readLineSync.question('\nWhat should I do?\nFor help, press ENTER\n\n');
}

const help = () => {
  console.log(`Command Line Todo application
=============================

Command line arguments:
-l   Lists all the tasks
-a   Adds a new task
-r   Removes a task
-c   Completes a task`);
}

const list = () => {
  console.log('\n');
  todos.length!==0? todos.forEach((v, i) => console.log(`[${i+1}] - ${v}`)): console.log(`No todos for today! :)`);
}

const add = () => {
  let item = readLineSync.question('\nWhat should I add?\n\n');
  if (item !== ''){
    text === ''? fs.appendFileSync(path, item) : fs.appendFileSync(path, `\n${item}`);
    console.log(`\n${item} was added to the list.`);
  }
  else {console.log(`Unable to add: no task provided`);}
}

const remove = () => {
  let item: number =  Number(readLineSync.question('\nWhat item should I remove?\n\n'));
  if (item>todos.length){
    console.log('Unable to remove: index is out of bound');
  }
  else if(item === 0){
    console.log('Unable to remove: no index provided');
  }
  else if(isNaN(item)){
    console.log('Unable to remove: index is not a number');
  }
  else{
    todos.splice(item-1, 1);
    console.log(`\n${item} was removed to the list.`);
    todos.length!==0? todos.forEach((v, i) => console.log(`[${i+1}] - ${v}`)): console.log(`No todos for today! :)`);
    fs.writeFileSync(path, '');

    todos.forEach((v, i) => i===0? fs.writeFileSync(path, v): fs.appendFileSync(path, `\n${v}`));    
  }
}

const def = () => {
  console.log(`\nPlease write valid command\n`);
}

while(true){
  switch (init()){
    case '': {
      help();
      break;
    }
    case '-l':{
      list();
      break;
    }
    case '-a':{
      add();
      break;
    }
    case '-r':{
      remove();
      break;
    }
    default: {
      def();
    }
  }
}


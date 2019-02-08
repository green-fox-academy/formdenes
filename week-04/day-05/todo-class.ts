'use strict';
import {errorType} from './error-types';
import {errorMsg} from './error-msg';
import {msg} from './msg';

const readLineSync = require('readline-sync');
const fs = require('fs');

export class TodoApp{
  private text:string;
  private todos:string[];
  private command:string;
  private path:string;
  private errorType: {[k:string]: string} = {};
  private errorMsg: {[k:string]: string} = {};
  private msg: {[k:string]: string} = {};
  public running: boolean;
  
  constructor(p:string){
    this.path = p;
    this.setText(p);
    this.running = true;
    this.todos = this.text === ''? [] : this.text.split('\n');
    this.errorType = errorType;
    this.errorMsg = errorMsg;
    this.msg = msg;
  }

  setText(p:string){
    this.text = fs.readFileSync(p, 'utf8');
  }

  setupTodos(){
    this.todos = this.text === ''? [] : this.text.split('\n');
  }

  printTodos(){
    this.todos.forEach((v, i) => console.log(`(${i+1}) - ${v}`));
  }

  getIndex(type:string){
    let item: number =  Number(readLineSync.question(this.msg[type]));
    if (item>this.todos.length){
      console.log(this.errorType[type] + this.errorMsg.outOfBound);
      return 0;
    }
    else if(item === 0){
      console.log(this.errorType[type] + this.errorMsg.noIndex);
      return 0;
    }
    else if(isNaN(item)){
      console.log(this.errorType[type] + this.errorMsg.notANumber);
      return 0;
    }
    else return item;
  }
  
  init(){
    this.setText(this.path);
    this.setupTodos();
    return this.command = readLineSync.question(this.msg.init);
  }

  help () {
    console.log(this.msg.divider);
    console.log(this.msg.help);
    console.log(this.msg.divider);
  }

  list() {
    console.log('\n');
    console.log(this.msg.divider);
    this.todos.length!==0? this.printTodos() : console.log(this.msg.emptyList);
    console.log(this.msg.divider);
  }

  add(){
    console.log(this.msg.divider);
    let item = readLineSync.question(this.msg.add);
    if (item !== ''){
      this.text === ''? fs.appendFileSync(this.path, `[ ] ${item}`) : fs.appendFileSync(this.path, `\n[ ] ${item}`);
      console.log(`\n${item} ${this.msg.addEnd}`);
    }
    else {console.log(this.errorType.add + this.errorMsg.noTask);}
    console.log(this.msg.divider);
  }

  remove(){
    this.edit('remove');
  }
  
  check(){
    this.edit('check');
  }
  
  edit(type:string){
    console.log(this.msg.divider);
    let item = this.getIndex(type);
    if (item!== 0){
      if (type === 'check'){
        this.todos[item-1] = '[x]' + this.todos[item-1].slice(3);
      }
      else if (type === 'remove'){
        this.todos.splice(item-1, 1);        
      }
      console.log(`\n${item} ${this.msg[type+'End']}`);
      fs.writeFileSync(this.path, '');
      this.todos.forEach((v, i) => i===0? fs.writeFileSync(this.path, v): fs.appendFileSync(this.path, `\n${v}`));    
    }
    console.log(this.msg.divider);
  }

  exit(){this.running = false;}
  def(){
    console.log(this.errorType.command);
  }
}
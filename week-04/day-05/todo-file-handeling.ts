'use strict';

const fs = require('fs');

export const fileHandeling = (path: string) => {
  const text = fs.readFileSync(path, 'utf8');
  const todos = text === ''? [] : text.split('\n');
  return {
    getText(): string {
      return text;
    },
    getTodos(): string[] {
      return todos;
    },
    printTodos(): void{
      todos.forEach((v, i) => console.log(`(${i+1}) - ${v}`));
    }
  }
}

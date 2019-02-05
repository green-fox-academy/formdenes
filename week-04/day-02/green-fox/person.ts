'use strict';

export class Person {
  name:string;
  age:number;
  gender:string;

  constructor(name:string = 'Jane Doe', age:number = 30, gend:string = 'female'){
    this.name = name;
    this.age = age;
    this.gender = gend;
  }

  introduce(){
    console.log(`HI, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }
  getGoal(){
    console.log(`My goal is: Live for the moment!`);
  }
}
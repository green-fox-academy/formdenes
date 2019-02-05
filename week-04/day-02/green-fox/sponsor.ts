'use strict';
import { Person } from './person';

export class Sponsor extends Person{
  company:string;
  hiredStudents:number;

  constructor(name:string = 'Jane Doe', age:number = 30, gend:string = 'female', company:string = 'Google'){
    super(name, age, gend);
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce(){
    console.log(`HI, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} so far.`);
  }
  getGoal(){
    console.log(`Hire brilliant junior software developers.`);
  }

  hire(){
    this.hiredStudents++;
  }
}
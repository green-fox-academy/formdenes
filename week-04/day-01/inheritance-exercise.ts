'use strict';
class Person {
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

class Student{
  name:string;
  age:number;
  gender:string;
  previousOrganization: string;
  skippedDays:number;

  constructor(name:string = 'Jane Doe', age:number = 30, gender:string = 'female', previousOrganization:string = 'The School of Life'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;

  }

  getGoal(){
    console.log(`Be a junior software developer.`);
  }

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays:number){
    this.skippedDays+=numberOfDays;
  }
}

class Mentor {
  name:string;
  age:number;
  gender:string;
  level:string;

  constructor(name:string = 'Jane Doe', age: number = 30, gender:string = 'female', level:string = 'intermediate'){
    this.name=name;
    this.age=age;
    this.gender = gender;
    this.level = level;
  }

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor`);
  }

  getGoal(){
    console.log(`Educate brilliant junior software developers.`);
  }
}

class Sponsor {
  name:string;
  age:number;
  gender:string;
  company:string;
  hiredStudents:number;

  constructor(name:string = 'Jane Doe', age:number = 30, gend:string = 'female', company:string = 'Google'){
    this.name = name;
    this.age = age;
    this.gender = gend;
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

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

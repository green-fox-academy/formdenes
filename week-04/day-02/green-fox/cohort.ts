'use strict';
import { Person } from './person';
import { Student } from './student';
import { Mentor } from './mentor';
import { Sponsor } from './sponsor';


class Cohort{
  name:string;
  students: Student[];
  mentros: Mentor[];

  constructor(name:string){
    this.name = name;
    this.students = [];
    this.mentros = [];
  }

  addStudent(student:Student){
    this.students.push(student);
  }

  addMentor(mentor: Mentor){
    this.mentros.push(mentor);
  }

  info(){
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentros.length} mentors.`);
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

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

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

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
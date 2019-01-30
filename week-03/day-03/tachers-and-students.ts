'use strict';
export{};

class Teacher{
  teach(student){
    student.learn();
  }
  answer(){
    console.log(`The teacher answered`);
  }
}

class Student{
  learn(){
    console.log(`The student learned.`);
  }
  question(teacher){
    teacher.answer();
  }
}

const student = new Student;
const teacher = new Teacher;

student.question(teacher);
teacher.teach(student);
'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies
// console.log(students.length);


function candies(list: any []){
    let sum: number = 0;
    for (let i:number = 0; i< list.length;i++){
        // console.log(list[i].candies);
        sum+=list[i].candies;
        // console.log(sum);
    }
    return sum;

}
console.log(candies(students));

function ageSum(list: any[]){
    let sum: number = 0;
    for(let i:number = 0; i<list.length;i++){
        if (list[i].candies<5){
            sum+= list[i].age;
        }
    }
    return sum;
}
console.log(ageSum(students));
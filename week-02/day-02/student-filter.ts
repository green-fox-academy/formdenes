"use strict";
export{};

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
  ];

  function hasManyCandies (list: any[]){
      list.forEach(value => {
        if (value.candies>4){
            console.log(value.name);
        }
      });
  }

hasManyCandies(students);

function averageCandies(list:any[]){
    let sum:number = 0;
    for (let i:number = 0;i<list.length;i++){
        sum+=list[i].candies;
    }
    let average:number = sum / list.length;
    return average;
}

console.log(averageCandies(students));
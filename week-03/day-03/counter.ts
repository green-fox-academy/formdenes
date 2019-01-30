/* 
Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */

'use strict';
export{};

class Counter{
  counter:number;
  constructor(int:number = 0){
    this.counter = int;
  }
  add(numb:number){
    this.counter+=numb;
  }
  get(){
    return this.counter.toString();
  }
  reset(){
    this.counter = 0;
  }
}

const counterOne = new Counter(4);
console.log(counterOne);
counterOne.add(6);
console.log(counterOne);
console.log(counterOne.get());
counterOne.reset();
console.log(counterOne);
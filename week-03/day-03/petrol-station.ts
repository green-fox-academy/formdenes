'use strict';
export{};

class Station{
  gasAmount;
  refill(car){
    this.gasAmount-=car.capacity;
    car.gasAmount+=car.capacity;
  }
}

class Car{
  gasAmount;
  capacity;
  constructor(ga:number = 0, c:number = 100){
      this.gasAmount = ga;
      this.capacity = c;
  }
}

const station = new Station;
station.gasAmount = 500;
const car = new Car();
console.log(station);
console.log(car);
station.refill(car);
console.log(station);
console.log(car);
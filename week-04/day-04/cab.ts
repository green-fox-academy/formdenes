'use strict';

export class Cab {
  private randomNumber = new Array<number>(4);
  private state: string;
  private counter: number;
  
  constructor (){
    this.randomNumber = this.randomNumber.map(v => Math.floor(Math.random()*10));
    this.state = 'playing';
    this.counter = 0;
  }
  
  guess(a = new Array<number>(4)){
    let result:string = '';
    console.log(`The original numbers were ${this.randomNumber}.`);
    a.forEach((v, i) => result += v===this.randomNumber[i]? 'cow ': 'bull ');
    this.counter++;
    result === 'cow cow cow cow '? this.state = 'finished': this.state = 'playing';
    return result;
  }
}

const cab = new Cab;

console.log(cab.guess([1,2,3,4]));
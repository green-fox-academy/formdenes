'use strict';

export class Sum{
  getSum(a:number[]){
    return a.reduce((a:number, b:number) => a+b, null);
  }
}
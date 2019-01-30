import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}
function orderDominoes(origSet: Domino[]){
  console.log(origSet[0]);
  let orderedSet: Domino[] = [];
  for (let i:number = 0; i<origSet.length; i++){
    if (i === 0){
      orderedSet.push(origSet[0]);
    }
    else {
      for (let j:number = 0; j<origSet.length; j++){
        if (origSet[j].values[0] === orderedSet[i-1].values[1]){
          orderedSet.push(origSet[j]);
          break;
        }
      }
    }
    console.log(`The ordered list at the end of ${i} is: `);
    console.log(orderedSet);
    console.log('-,-,-,-,-');
  }
  return orderedSet;
}

let dominoes = initializeDominoes();

print(dominoes);
console.log(dominoes[0]);
console.log('-------------');
console.log(orderDominoes(dominoes));

'use strict';
export{};

const fs = require('fs');

function ticTacResult(fileName:string){
  const gameArray = fs.readFileSync(fileName, 'utf-8').split('\n');
  const linesReduced = gameArray.filter(value => value.charAt(0) === value.charAt(1) && value.charAt(1) === value.charAt(2));
  let gameArrayInvert:any[] = ['','',''];
  gameArray.forEach(value => {
    gameArrayInvert[0]+=value.charAt(0);
    gameArrayInvert[1]+=value.charAt(1);
    gameArrayInvert[2]+=value.charAt(2);
  })
  const gameDiagonalOne = [gameArray[0].charAt(0) + gameArray[1].charAt(1) + gameArray[2].charAt(2)];
  const gameDiagonalTwo = [gameArray[0].charAt(2) + gameArray[1].charAt(1) + gameArray[2].charAt(0)];
  const gameDiagonalOneReduced = gameDiagonalOne.filter(value => value.charAt(0) === value.charAt(1) && value.charAt(1) === value.charAt(2));
  const gameDiagonalTwoReduced = gameDiagonalTwo.filter(value => value.charAt(0) === value.charAt(1) && value.charAt(1) === value.charAt(2));
  const linesReducedInvert = gameArrayInvert.filter(value => value.charAt(0) === value.charAt(1) && value.charAt(1) === value.charAt(2));
  
  if (linesReducedInvert.length>0){
    return linesReducedInvert[0].charAt(0);
  }
  else if (linesReduced.length>0){
    return linesReduced[0].charAt(0);
  }
  else if (gameDiagonalOneReduced.length>0){
    return gameDiagonalOneReduced[0].charAt(0);
  }
  else if (gameDiagonalTwoReduced.length>0){
    return gameDiagonalTwoReduced[0].charAt(0);
  }
  else {return "Draw";}
}

console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"
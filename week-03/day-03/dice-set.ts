class DiceSet {
    dice: number[];
    readonly numOfDices: number = 6;

    roll(): number[] {
        this.dice = [];
        for(var i = 0; i < this.numOfDices; i++) { 
            this.dice.push(Math.floor(Math.random() * 6 + 1));
        }
        return this.dice;
    }

    reroll(index?: number) {
        if(index == undefined) {
            for(var i = 0; i < this.numOfDices; i++) { 
                this.dice[i] = Math.floor(Math.random() * 6 + 1);
            }
        } else {
            this.dice[index] = Math.floor(Math.random() * 6 + 1);
        }
    }
    
    getCurrent(index?: number) {
        if(index == undefined) {
            return this.dice;
        } else {
            return this.dice[index];
        }        
    }
}

let diceSet = new DiceSet();

function rollSixs(diceObj){
  let correctIndexes: number[] = [];
  diceObj.roll();
  console.log(`After the first roll, the dices are: ${diceObj.dice}`);
  diceObj.getCurrent().forEach((value, index) => {
    if (value == 6){
      correctIndexes.push(index);
    }
  });
  for (let i:number = 0; i>=0; i++){
    if (i>=100){
      break;
    }
    for (let j:number = 0; j<diceObj.numOfDices; j++){
      if (correctIndexes.indexOf(j) ===-1){
        diceObj.reroll(j);
        if (diceObj.dice[j]==6){
          correctIndexes.push(j);
        }
      }
    }
    console.log(`The reroll was ${diceObj.dice}`);
    console.log('---------------');
    if (correctIndexes.length>=6){
      break;
    }

  }
  console.log(`The final result is: ${diceObj.dice}`);

}
rollSixs(diceSet);

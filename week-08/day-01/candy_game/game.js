'use strict';

const lollypopPrice = 100;

const createCandies = document.querySelector('.create-candies');
const buyLollypops = document.querySelector('.buy-lollypops');
const candyMachine = document.querySelector('.candy-machine');

const candies = document.querySelector('.candies');
const lollipops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');

let multiplyer = 1;

let numberOfCandies = 0;
let numberOfLollipops = 0;
let productionRate = Math.floor(numberOfLollipops/10);

const getCandieText = () => {
  let text = '';
  for(let i = 0; i<numberOfCandies; i++){
    text += '🍬';
  }
  return text;
}

const getLollypopText = () => {
  let text = '';
  for(let i = 0; i<numberOfLollipops; i++){
    text += '🍭';
  }
  return text;
}

const giveCandy = () => {
  numberOfCandies+= 1*multiplyer;
  candies.textContent = getCandieText();
}

const buyLollypop = () => {
  numberOfCandies>=lollypopPrice?
  (numberOfCandies-=lollypopPrice,
  numberOfLollipops++,
  candies.textContent = getCandieText())
  :
  null;
  lollipops.textContent = getLollypopText();
  productionRate = Math.floor(numberOfLollipops/10);
  speed.textContent = productionRate;
}

setInterval(() => {
  
  productionRate = Math.floor(numberOfLollipops/10);
  for (let i = 0; i<productionRate; i++){
    giveCandy();
  }
},1000);

candies.textContent = getCandieText();
lollipops.textContent = getLollypopText();
speed.textContent = productionRate;

createCandies.onclick = giveCandy;
buyLollypops.onclick = buyLollypop;

candyMachine.onclick = () => {
  multiplyer = multiplyer*10;
  candyMachine.textContent = `Make candy rain x${multiplyer}`
}


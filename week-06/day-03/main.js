let buttonUp = document.createElement('button');
let buttonDown = document.createElement('button');
let buttonRight = document.createElement('button');
let buttonRemove = document.createElement('button');
let buttons = [buttonUp,buttonRight,buttonRemove,buttonDown];
buttonUp.textContent = 'Up';
buttonRight.textContent = '>';
buttonRemove.textContent = 'X';
buttonDown.textContent = 'Down';

buttonUl = document.createElement('ul');
buttons.forEach(v=>buttonUl.appendChild(v));

itemBread = document.createElement('li');
itemMilk = document.createElement('li');
itemOrange = document.createElement('li');
itemTomato = document.createElement('li');

itemBread.textContent = 'bread';
itemMilk.textContent = 'milk';
itemOrange.textContent = 'orange';
itemTomato.textContent = 'tomato';

let leftItems = [itemBread,itemMilk, itemOrange, itemTomato];

let rightItems = [];

let leftUl = document.createElement('ul');
leftItems.forEach(v=>leftUl.appendChild(v));
let rightUl = document.createElement('ul');

let body = document.querySelector('body');

const isSelected = (element) => {
  return element.style.backgroundColor == 'lightgrey'? true:false;
}

const select = (element) => {
  element.style.backgroundColor = isSelected(element)? "white" : "lightgrey";
}


select(leftItems[0]);

body.appendChild(leftUl);
body.appendChild(buttonUl);
body.appendChild(rightUl);
buttonUp.onclick = () => {
  if (!isSelected(leftItems[0])){
    leftItems.forEach((v,i) => {
      if (isSelected(v)){
        select(v);
        select(leftItems[i-1]);
      }
    });
  }
  else {
    select(leftItems[3]);
    select(leftItems[0]);
  }
}

buttonDown.onclick = () => {
  let done = false;
  if(lef)
  if (!isSelected(leftItems[3])){
    leftItems.forEach((v,i,a) => {
      
      if (isSelected(v) && !done){
        select(v);
        select(leftItems[i+1]);
        done = true;
      }
    });
  }
  else {
    select(leftItems[3]);
    select(leftItems[0]);
  }
}

buttonRight.onclick = () => {
  let done = false
  leftItems.forEach((v,i) => {
    if(isSelected(v) && !done){
      select(leftItems[i]);
      let pushed = leftItems.splice(i,1);
      rightItems.push(pushed);
      rightUl.appendChild(v);
      if (leftItems.length>i){
        select(leftItems[i]);
      }
      else if(leftItems.length>0){
        select(leftItems[i-1]);
      }
      done = false;
    }
  })
}
'use strict';
export{};

class PostIt {
  backgroundColor;
  textOnIt;
  textColor;
  constructor (bg:string, txt:string, txtCol:string){
    this.backgroundColor  = bg;
    this.textOnIt = txt;
    this.textColor = txtCol;
  }
}

const postItOne = new PostIt('orange', 'Idea 1', 'blue');
const postItTwo = new PostIt('pink', 'Awsome', 'black');
const postItThree = new PostIt('yellow', 'Superb!', 'green');

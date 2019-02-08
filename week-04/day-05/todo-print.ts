'use strict';

import {msg} from './msg';

export const print = () => {
  return {
    printAction(text:string){
      console.log(msg.divider);
      console.log((text));
      console.log(msg.divider);
    }
  }
}
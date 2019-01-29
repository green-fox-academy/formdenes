'use strict';
export{};

function divideTen (a:number){
    return a/10;
}
console.log(divideTen(0));

try{
  let sol = divideTen(0);
  if (sol === 0) {
    throw new Error("fail");
  }
  console.log(sol);
} catch(e){
  console.log(e.message);
}

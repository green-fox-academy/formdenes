'use strict';
export{};


const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// console.log(queue.map(function (item, index, object){
//     object.splice(index,1);
// }));

function securityCheck (list: any[]){
    return list.map(obj => {
        if (obj.guns!==0){
            watchlist.push(obj.name);
            return {};
        }
        else if (obj.alcohol!==0){
            securityAlcoholLoot+=obj.alcohol;
            obj.alcohol = 0;
            return obj;
        }
        else {return obj;}
    });
}

console.log(securityCheck(queue));
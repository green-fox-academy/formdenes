'use strict';
export{};

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

function getNameAndBalance(account: number){
    accounts.forEach(value => {
        if (value.accountNumber === account){
            let list: any[] = [];
            list.push(value.clientName);
            list.push(value.balance);
            console.log(list);
        }
    })
}

getNameAndBalance(11234543);

function transferAmount(list: any[], from: number, to: number, amount: number){
    let accountNumbers: number[] = [];
    list.forEach(obj => {
        accountNumbers.push(obj.accountNumber);
    });
    if (accountNumbers.indexOf(from)!==-1 && accountNumbers.indexOf(from)!==-1){    
        return list.map(obj => {
            if (Object.keys(obj).map(key => obj[key]).indexOf(from)!==-1){
                //do the things
                obj.balance -= amount;
                return obj;
            }
            else if (Object.keys(obj).map(key => obj[key]).indexOf(to)!==-1){
                obj.balance += amount;
                return obj;
            }
            else {
                return obj;
            }
        });
    }
    else {return '404 - account not found'}
}

console.log(transferAmount(accounts,43546731, 23456311, 500.0));
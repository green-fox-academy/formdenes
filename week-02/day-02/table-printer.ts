'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];
let test:string = '';

function printTable (list: any[]){
    //stores the head in array
    let keys: string[] = Object.keys(list[0]);
    //the actual heads
    let firstColumnHead: string = "Ingredient";
    let secondColumnHead: string = "Needs cooling";
    let thirdColumnHead: string = "In stock";


    //createing cell creation function
    function createCell(value: string, width: number = value.length){
        let out:string = '';
        let spacesBehind:string = '';
        for (let i:number = 0;i<width+1-value.length;i++){
            spacesBehind = spacesBehind.concat(' ');
        }
        out = out.concat('| ',value,spacesBehind);
        return out;
    }

    function createLine(char:string,length: number){
        char = '';
        for (let i:number = 0;i<length+2;i++){
        char = char.concat('-');
        }
        return char;   
    }

    //the printer variable
    let print: string = '';
    //the horizontal divider printer variable
    let hDivider: string = '';
    
    //the width of the first column  --- dynamic
    let firstColumnWidth:number = 0;
    for (let i: number = 0; i<list.length; i++){
        if (firstColumnWidth<list[i].name.length) {firstColumnWidth = list[i].name.length;}
    }
    //the width of the rest of columns
    let secondColumnWidth:number = secondColumnHead.length;
    let thirdColumnWidth:number = thirdColumnHead.length;
    

    //the head top line
    let firstColumnDivider: string = '';
    firstColumnDivider = createLine(firstColumnDivider,firstColumnWidth);
    
    let secondColumnDivider: string = '';
    secondColumnDivider = createLine(secondColumnDivider,secondColumnHead.length);
   
    let thirdColumnDivider: string = '';
    thirdColumnDivider = createLine(thirdColumnDivider,thirdColumnHead.length);

    
    hDivider = hDivider.concat('+',firstColumnDivider,'+',secondColumnDivider,'+',thirdColumnDivider,'+');
    console.log(hDivider);
    
    console.log(createCell(firstColumnHead,firstColumnWidth).concat(createCell(secondColumnHead),createCell(thirdColumnHead),'|'));
    
    console.log(hDivider);

    //Table body
    list.forEach(obj =>{
        console.log(createCell(obj.name,firstColumnWidth).concat(createCell(String(obj.needsCooling),secondColumnWidth),createCell(obj.inStock.toString(),thirdColumnWidth),'|'));
    });
    
    //bottom line
    console.log(hDivider);
}

printTable(ingredients);

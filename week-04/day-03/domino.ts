interface Comparable {
    compareTo(other: Comparable): number;
}
interface Printable{
    printAllFields();
  }

class Domino implements Comparable, Printable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
    compareTo(other:Domino):number{
        if (this.values[0] < other.values[0]) {
            return -1;
          }
        else if (this.values[0] > other.values[0]) {
            return 1;
        }
        else return 0;
    }
    printAllFields(){
        console.log(`${this.values[0]}, ${this.values[1]}`);
    }
}

export {Domino};
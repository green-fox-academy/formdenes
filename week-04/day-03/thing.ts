interface Comparable {
  compareTo(other: Comparable): number;
}

class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }

  public complete() {
      this.completed = true;
  }
  print(){
    let checkbox = '';
    if (this.completed === true){
      checkbox = '[x]';
    }
    else {checkbox = '[ ]';}
    return `${checkbox} ${this.name}`;
  }
  compareTo(other:Thing):number {
    if (this.completed === undefined && other.completed === true) {
      return -1;
    }
    else if (this.completed === true && other.completed === undefined) {
        return 1;
    }
    else return 0;
  }
}

export { Thing };

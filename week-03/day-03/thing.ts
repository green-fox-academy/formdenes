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
}

export { Thing };

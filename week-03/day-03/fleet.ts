import { Thing } from "./thing";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }
    print(){
      this.things.forEach((value, index) => {
        console.log(`${index+1}. ${value.print()}`);
      });
    }
}

export { Fleet };
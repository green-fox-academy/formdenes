import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();


const thing1 = new Thing('Get milk');
const thing2 = new Thing('Remove the obtacles');
const thing3 = new Thing('Stand up');
thing3.complete();
const thing4 = new Thing('Eat lunch');
thing4.complete();


fleet.add(thing3);
fleet.add(thing4);
fleet.add(thing2);
fleet.add(thing1);

console.log(fleet.things.sort(function (a: Thing , b: Thing): number {
  return a.compareTo(b);
}));


fleet.print();

for (let todo of fleet.things) {
  todo.printAllFields();
}
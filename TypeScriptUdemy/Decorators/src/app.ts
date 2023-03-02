function Logger(constructor: Function) {
  console.log("Looging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);

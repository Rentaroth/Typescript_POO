export abstract class Animal {
  constructor(protected name: string) {} //Es como un private pero esta se puede heredar

  move() {
    console.log('Moving around!');
  }

  greeting() {
    return `Hello my name is ${this.name}`;
  }

  protected doAFlip() {
    return 'Rad Flip!';
  }
}

export class Dog extends Animal {
  constructor(public owner: string, name: string) {
    super(name);
  }

  bark(times: number) {
    let p = 0;
    while (p < times) {
      console.log(`woof! ${this.name}`);
      console.log(this.doAFlip());
      p++;
    }
  }

  move() {
    super.move(); //se pueden tener métodos con el mismo nombre que en el padre porque los métodos del padre se llaman con SUPER
    return console.log('Moving like a dog!');
  }
}

/* const doge = new Dog('Antonio', 'new name');
console.log(doge.greeting());
//doge.name = 'doge';
console.log(doge.greeting());
doge.bark(2);
doge.move(); */

export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving around!');
  }

  greeting() {
    return `Hello my name is ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(public owner: string, name: string) {
    super(name);
  }
  bark(times: number) {
    let p = 0;
    while (p < times) {
      console.log('woof!');
      p++;
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const doge = new Dog('Antonio', 'doge');
doge.move();
console.log(doge.greeting());
doge.bark(5);
console.log(doge.owner);

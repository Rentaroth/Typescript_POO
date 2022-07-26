import { Animal, Dog } from "./09-protected";

//const animal = new Animal('Blacky'); // Bloqueada la creación de instancias de la clase padre con la palabra ABSTRACT
//console.log(animal.greeting());

const Blacky = new Dog('Antonio', 'Blacky');
Blacky.bark(3);
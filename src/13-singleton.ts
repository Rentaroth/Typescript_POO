export class Service {
  static instance: Service | null = null;

  private constructor(public name: string) {}

  static create(name: string) {
    if(Service.instance === null) {
      console.log('Solo una vez!')
      Service.instance = new Service(name);
    }
    return Service.instance;
  }

  getName() {
    return this.name;
  }
}

const res1 = Service.create('Service 1');
console.log(res1.getName());

const res2 = Service.create('Service 2');
console.log(res2.getName());

console.log(res1 === res2);
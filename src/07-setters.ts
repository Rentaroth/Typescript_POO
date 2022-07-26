export class MyDate {
  constructor(
    public year: number = 1994,
    private _month: number = 6,
    private _day: number = 11
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    if(this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(value: number) {
    if(value >= 1 && value <= 12) {
      this._month = value;
    } else {
      throw new Error('Make sure the month is between 1 to 12 value');
    }
  }
}

const mydate = new MyDate(1994);
console.log(mydate.printFormat());
mydate.add(-3, 'days');
console.log(mydate.printFormat());

const mydate2 = new MyDate(2004);
mydate2.month = 5;   //El setter inyecta un valor por medio de un método en forma de propiedad
console.log('2004', mydate2, mydate2.day);
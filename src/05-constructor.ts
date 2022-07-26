export class MyDate {
  constructor(
    public year: number = 1994,
    public month: number = 6,
    private day: number = 11
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
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
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const mydate = new MyDate(1994);
console.log(mydate.printFormat());
mydate.add(-3, 'days');
console.log(mydate.printFormat());

const date = new Date();
date.getHours();
date.toLocaleDateString();

const date2 = new Date(1993, 1, 12); // 0: enero - 11: diciembre
date.getHours();
date.toLocaleDateString();

console.log(date, date2);

export class MyDate {
  year: number;
  month: number;
  day: number;
  constructor (year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(1994, 6, 11);
console.log(myDate);
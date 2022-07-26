/* function getValue(value: number | string) {
  return value;
} */

function getValue<myType, myType2>(value: myType) {
  return value;
}

getValue<number, string>(12);
getValue<string, boolean>('string');


Promise<boolean>
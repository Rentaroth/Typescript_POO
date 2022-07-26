console.log(Math.PI);
console.log(Math.max(5, 6, 7, 8, 3, 2, 1, 9));

class MyMath {
  static readonly PI = 3.14; //Método estático de solo lectura para protegerlo

  static max(...params: number[]) { //El algoritmo no está resuelto solo para mostrar el ejemplo
    return params.reduce((max, item) => max >= item ? max : item);
  }
}

console.log('MyMath', MyMath.PI);
console.log('MyMath', MyMath.max(-5, -6, -7, -8, -3, -2, -1, -9));
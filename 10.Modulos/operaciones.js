//Formas de importar y exportar modulos
//1.- CommonJS - require
//2.- Import ES6 - import

let moduloMatematicas = require("./matematicas/matematicas.js");

let factorial = moduloMatematicas.factorial(5);
console.log("El factorial es: " + factorial);

console.log("La suma es: " + moduloMatematicas.suma(23, 45));

console.log("La potenciacion es: " + moduloMatematicas.potenciacion(3, 4));

let producto = moduloMatematicas.multiplicacion(9, 8);
console.log("El producto es: " + producto);
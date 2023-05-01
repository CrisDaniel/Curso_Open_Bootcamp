//Formas de importar y exportar modulos
//1.- CommonJS - require
//2.- Import ES6 - import

//Aqui solo se puede aceeder a las funciones y propiedades asignadas dentro del *import*
import { suma, multiplicacion, potenciacion, factorial, operaciones } from "./matematicas.js";
let fact = factorial(7);
console.log("El factorial con ES6 es: " + fact);

console.log("La suma con ES6 es: " + suma(23, 45));

console.log("La potenciacion ES6 es: " + potenciacion(3, 4));


//El moduloMatematicas es el objeto asignado por el cual se accederan a todas las propiedades
//y funciones exportadas
import * as moduloMatematicas from './matematicas.js'

let producto = moduloMatematicas.multiplicacion(9, 8);
console.log("El producto ES6 es: " + producto);

console.log(`Los resultados declarados con variables son: ${moduloMatematicas.operaciones}.`)

//Otra clase de exportacion desde literatura
import libros, {libroMisterio} from "./literatura.js";

console.log(libros());
console.log(libroMisterio);
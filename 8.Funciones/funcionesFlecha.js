const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let flecha = array.map((valor) => valor % 2 ? valor : valor*2); //4 % 2 => 0 => por lo que es falso
console.log(flecha);

const array2 = [10, 11, 12, 13, 14, 15];
//Declaramos la funcion flecha
let dobleValor = (valor) => valor % 3 ? valor : valor * 2;

let array3 = array2.map(dobleValor);
console.log(array3);
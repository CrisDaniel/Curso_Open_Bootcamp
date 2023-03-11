//valueOF()
let a = 8;
let b = new Number(9);

console.log(b);
console.log(a + b);

console.log("b: " + b.valueOf());

let str = new String("Soy un string");
console.log(str);
console.log(str.valueOf());
console.log("")

//NaN (Not a Number) - Infinity

let noNumber = new Number("hola");
console.log(noNumber.valueOf());
console.log(isNaN(noNumber));       //isNaN retorna un true si el parametro no es un numero y false si lo es;

let x = 10;
let z = 0;

console.log(x/z);

// De string a number - Number, parseInt y parseFloat

let numeroString = "25";
let num = 45;

let convertirParseInt = parseInt(numeroString);     //parseInt si agarra un decimal lo que hace es tomar solo la parte entera
let convertirNumber = Number(numeroString);
let convertirParseFloat = parseFloat(numeroString); //parseFloat agarra tambien los decimales

let sumaConvertida = num + convertirParseFloat;

console.log(sumaConvertida);
console.log("");

// Numeros hexadecimales (base 16)

let numHex = "0xaf5c7";

console.log(parseInt(numHex, 16)); //Imprimir un numero hexadecimal (entre parentesis se puede omitir el 16, y si se quiere en base 8 cambiamos a (numeroHex, 8))

//Obtener los valores max y min en JavaScript

let min_presicion = Number.EPSILON;;
let minValorJs = Number.MIN_VALUE;
let maxValorJs = Number.MAX_VALUE;

console.log(min_presicion);
console.log(minValorJs);
console.log(maxValorJs);
console.log(2 ** 1024);
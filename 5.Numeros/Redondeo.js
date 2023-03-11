let numeroA = 8.74535;
let numeroB = 7.97;

let numeroString = numeroA.toFixed(1);  //Con toFixed hacemos que un numero se muestre con la cantidad de decimales que indiquemos
//-                                     //pero convertido a un string.
console.log(numeroString);
console.log( typeof numeroString);

let suma = numeroA + numeroB;
console.log(suma.toPrecision(3));       // Con toPresicion(x) limitamos las cifras de todo el numero con el valor x; suma = 16,.7
//-                                     //convertido a string
/*Escribe un programa que le pida al usuario que adivine un número entre 1 y 10. Si el usuario adivina el número correcto,
el programa debe imprimir "¡Felicitaciones, adivinaste el número!" y salir del ciclo while. Si el usuario adivina un número incorrecto,
el programa debe imprimir "Lo siento, ese no es el número correcto. Intenta de nuevo" y permitir que el usuario intente adivinar de nuevo.*/

let numeroAleatorio = Math.trunc(Math.random()*10) + 1;
let numero = 8;

while (numero === numeroAleatorio) {
    console.log("¡Felicitaciones, adivinaste el número!");
    numero++;
}
console.log("Numero aleatorio:" + numeroAleatorio);

let i = 0;
do {
    console.log(i)
    i++;
} while (i < numeroAleatorio);
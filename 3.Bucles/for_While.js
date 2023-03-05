/*Dado un string, se pide escribir un programa en JavaScript que cuente la cantidad de vocales que contiene el string utilizando un bucle for.
El programa debe tener las siguientes características:
-El string debe ser ingresado por el usuario.
-El programa debe contar tanto las vocales en mayúsculas como en minúsculas.
-El programa debe imprimir la cantidad de vocales que se encontraron en el string.*/

let string = "Web";
let contador = 0;
let vocales = ["a","e","i","o","u"];

function cantidadVocales(){
    for (let letras = 0; letras < string.length; letras++) {
        cadena = string.toLocaleLowerCase();
        for (let vocal = 0; vocal < vocales.length; vocal++) {
            if (string[letras] == vocales[vocal]) {
                contador++;
            };
            
        }
    }
    return contador || "Ninguna";
}

console.log("Vocales encontradas: " + cantidadVocales());
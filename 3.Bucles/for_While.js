/*Dado un string, se pide escribir un programa en JavaScript que cuente la cantidad de vocales que contiene el string utilizando un bucle for.
El programa debe tener las siguientes características:
-El string debe ser ingresado por el usuario.
-El programa debe contar tanto las vocales en mayúsculas como en minúsculas.
-El programa debe imprimir la cantidad de vocales que se encontraron en el string.*/

let string = "HolA mundo";
let contador = 0;

function cantidadVocales(){
    for (let index = 0; index < string.length; index++) {
        cadena = string.toLocaleLowerCase();
        console.log(cadena[index]);
        if(cadena[index] == "a"||cadena[index] == "e"||cadena[index] == "i"||cadena[index] == "o"||cadena[index] == "u"){
            contador++;
        }
        else{
            console.log("No existe vocales");
        }
    }
    return contador;
}

console.log(cantidadVocales());
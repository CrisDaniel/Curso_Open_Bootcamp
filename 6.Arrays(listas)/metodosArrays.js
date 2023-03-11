let arrays = [4, "hola", true, NaN, Infinity, null, undefined, {nombre: "Cristian", apellido: "Revoredo"}];

console.log(arrays[7]);
console.log(arrays[4]);
console.log(arrays[3]);

//Metodos: .push: agrega elementos al final; .unshift(): agrega elementos al principio

arrays.push([24, "libro"]);
console.log(arrays);

console.log("")

arrays.unshift(1, "segundoElemento");
console.log(arrays);
console.log("");

//Metodos para eliminar elementos de un array
//.pop():Elimina valores al final de un array ; shift(): Elimina valores al principio del array
//!Los archios eliminados se pueden guardar en una nueva variable => eliminado = array.pop();

let array2 = [5, "Java", true, {ANIMAL: "Aguila"}];
array2.pop()
console.log(array2);

array2.shift();
console.log(array2);
console.log("");

//Otros metodos que sirven para eliminar
//! .splice(indice_donde_comenzara_a_eliminar, numero_de_elementos_que_eliminara);

let array3 = [1, 2, 3, 4, 5, 6, 7, 8];
array3.splice(3, 4);

console.log(array3);    //Elimina el 4 y 5.

//Agregar elementos tambien con .splice
// !.splice(indice, 0: porque_no_Se_eliminara, nuevo_elemento)

let array4 = [10, 11, 12, 13, 14, 15, 16, 17];

array4.splice(4, 0, "Nuevo valor");
console.log(array4);

//Modificar valor de un array
// !.splice(indice, 1: porque_no_Se_eliminara_uno_que_Sera_remplazado, nuevo_elemento)

array4.splice(7, 1, "100");
console.log(array4);
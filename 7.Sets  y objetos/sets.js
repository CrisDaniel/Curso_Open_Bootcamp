let lista = [1, 3, 5, 7, 9, 11, 13, 15, "Fiis", "UNAS", 5, 9, "Fiis", {vocal: "a"}, {vocal: "a"}];
let listaSinRepeticion = new Set(lista);    //Set conserva los elementos que no se repiten, y el objeto vocal puede tener el mismo contenido pero al ser objetos son diferentes
console.log(listaSinRepeticion);

listaSinRepeticion.add("JavaScript");   //Añade un nuevo elemento
console.log(listaSinRepeticion);

listaSinRepeticion.delete(9);
console.log(listaSinRepeticion);

//listaSinRepeticion.clear();   El clear elimina todos los elementos
//console.log(listaSinRepeticion);

console.log(listaSinRepeticion.has("UNAS"));    //.has()busca u elemento
console.log(listaSinRepeticion.size);           //La cantidad de elementos

listaSinRepeticion.forEach(valor => console.log(valor));

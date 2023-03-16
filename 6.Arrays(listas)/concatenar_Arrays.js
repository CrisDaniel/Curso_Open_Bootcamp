let lista1 = ["ave", "reptiles", "mamiferos", "anfibios"]
let lista2 = ["peces", "marsupiales", "artrpodos"]

let animales = lista1.concat(lista2);
console.log(animales);
console.log("..........");

let copiaAnimales = [...animales];
console.log(copiaAnimales);
console.log("..........");

//Unir dos listas con el factor de propagacion

let humano = ["hombre", "muejeres"];
let serVivo = [...humano, ...lista1, ...lista2]
console.log(serVivo);

//Obtener una lista a partir de otra con .slice()

const vocales = ["a", "e", "i", "o", "u"];
let fragmentoDeVocal = vocales.slice(1,4);
console.log(fragmentoDeVocal);
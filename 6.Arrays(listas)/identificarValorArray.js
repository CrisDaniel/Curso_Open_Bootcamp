const arrayNumerico = [1, 56, 345, -34, 0, 23, 34, 4];
let ref = arrayNumerico.some(valor => valor < 25);
console.log(ref);

let existeNumero = arrayNumerico.some(valor => valor === 345);
console.log(existeNumero);

let listaObjetos = [
    {nombre: "Eleonor", edad: 14},
    {nombre: "Lian", edad: 22},
    {nombre: "Ian", edad: 22},
    {nombre: "Ciel", edad: 4},
    {nombre: "Moenia", edad: 18},
    {nombre: "Athena", edad: 5}
]
let existeAthena = listaObjetos.some(persona => persona.nombre === "Athena");
console.log(existeAthena);

const string = "Mi nombre es chatGPT";
let listaString = Array.from(string);
console.log(listaString);

const set = new Set([2, "JS", 45]);
let setArray = Array.from(set);
console.log(setArray);

const keys = listaObjetos.keys();
console.log(keys);
let keysString = Array.from(keys);
console.log(keysString);
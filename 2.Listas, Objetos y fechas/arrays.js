const lista1 = [1, "string", true, undefined, null];
const lista2 = new Array(1, 3, "fiis", true);
const lista3 = new Array(5);
lista3[0] = "Hola mundo!";
lista3[2] = [4, "variable"];
const lista4 = [lista1, lista2, lista3];

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Iterar los valores de una lista
const array = ["cris", 5, true, null, NaN, "Como estas", {nombre: "WolfGame", tamaño: "1.1GB"}];

//Forma antigua (poco eficiente)

for (let iterador = 0; iterador < array.length; iterador++) {
    console.log(array[iterador]);
}
console.log(".......................");

//Metodo forEch

array.forEach(iterador => {
    console.log(iterador)
});
//Iterar los valores de una lista
const array = ["cris", 5, true, null, NaN, "Como estas", {nombre: "WolfGame", tamaño: "1.1GB"}];

//Forma antigua (poco eficiente)

for (let iterador = 0; iterador < array.length; iterador++) {
    console.log(array[iterador]);
}
console.log(".......................");

//Metodo forEch

array.forEach(valor => {
    console.log(valor)
});
console.log("--------------------------");

//Busqueda de un valor dentro de una lista con .find() que ejecuta la función callback una vez por cada índice del array
//hasta que encuentre uno en el que el callback devuelva un valor verdadero. Si es así, find devuelve inmediatamente el
//valor del elemento. En caso contrario, find devuelve undefined

let busqueda = array.find(elemento => {
    if(elemento === "Como estas"){
        return  "Si hay";
    };
});
console.log(busqueda);
console.log("***************************")

let listaObjetos = [
    {nombre: "Eleonor", edad: 14},
    {nombre: "Lian", edad: 22},
    {nombre: "Ian", edad: 22},
    {nombre: "Ciel", edad: 4},
    {nombre: "Moenia", edad: 18},
    {nombre: "Athena", edad: 5}
]

let nombres = listaObjetos.find(hijos => {
    if (hijos.edad == 5) {
        return true;
    }
});
console.log(nombres);

let objeto = listaObjetos.find(age => age.edad === 18);
console.log(objeto.nombre);
let {edad} = listaObjetos.find(age => age.nombre === "Eleonor");
console.log(edad);
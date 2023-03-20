//.sort() -> Metodo que modifica el array

let listaNumeros = [0,56,23,5,3,8,45,45,2,47,9,4,12];

listaNumeros.sort((a,b) => {    //0 es menor a 56 este esta antes que 56, se queda en su lugar
    if(a > b){                  //56 es mayor a 23, avanza 1 posicion...[0,23,56,5,3,8,45,45,2,47,9,4,12]
        return 1;               //56 es mayor a 5 asi que avanza 1 posicion... [0,23,5,56,3,8,45,45,2,47,9,4,12] y asi sucesivamente.
    }else if(a < b){
        return -1;
    }else{
        return 0;
    }
});
console.log(listaNumeros);

let listaNumeros2 = [134,5,564,2,75,2,08,80,6,4,13];
listaNumeros2.sort((a,b) => b - a);
console.log(listaNumeros2);

let listaObjetos = [
    {nombre: "Eleonor", edad: 14},
    {nombre: "Lian", edad: 22},
    {nombre: "Ian", edad: 22},
    {nombre: "Ciel", edad: 4},
    {nombre: "Moenia", edad: 18},
    {nombre: "Athena", edad: 5}
]

listaObjetos.sort((a,b) => {
    if (a.edad < b.edad) {
        return -1;
    } else {
        return 1;
    }
});
console.log(listaObjetos);

//COMPARACION DE LISTAS
//.every()

let numer = [2, 5, -4, 424, 23, -83, 1];
let mayorNumero = numer.every(val =>{
    if(val > 0){
        return true;
    }else{
        return false;
    }
});
console.log(mayorNumero);   //Imprimer false por que no todos son mayor a 0.
//let mayorNumero = numer.every(valor => valor > 0);    Una form mas simplificada.
console.log("............................................................");

let lista1 = [1, 2, 3, 4, 5];
let lista2 = [1, 2, 3, 4, 5];
let lista3 = [1, 2, 3, 4, 5, 6];

function compararListas(array1, array2){
    if(array1.length != array2.length) return false;
    let comparacion = lista1.every((valor, iterador) => valor === array2[iterador]);
    return comparacion;
};
console.log(compararListas(lista1, lista3));
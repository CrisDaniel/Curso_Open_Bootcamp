/*- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/

//!PREGUNTA 1 Y 2
let listaCompra = ["Lechuga", "Pollo", "Fresas", "Azucar", "Ajinomen", "CocaCola"];
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);
listaCompra.pop();
console.log(listaCompra);

//!PREGUNTA 3 Y 4
console.log("##################################")
const listaPeliculas = [
    {nombre: "Harry Potter", fecha: {año : 2009, mes: "noviembre", dia: 12}, director: "PersonaX"},
    {nombre: "Mision Imposible", fecha: {año : 2014, mes: "Octubre", dia: 23}, director: "PersonaY"},
    {nombre: "Mision Estelar", fecha: {año : 2012, mes: "Enero", dia: 09}, director: "PersonaZ"}
];
let peliculasAntesDel2010 = listaPeliculas.filter(peli => peli.fecha.año < 2010);
console.log(peliculasAntesDel2010);

//!PREGUNTA 5 y 6
let directores = listaPeliculas.map(valor=> valor.director);
console.log(directores);

let titulos = listaPeliculas.map(valor=> valor.nombre);
console.log(titulos);

//!PREGUNTA 7 y 8
let directoresTitulos = directores.concat(titulos);
console.log(directoresTitulos);

let concatenarFactorPropagacion = [...directores, ...titulos];
console.log(concatenarFactorPropagacion);
// .map() - .filter() - .reduce()

let array = ["Aguila", "Venado", "Tiburon", "Topo"];

let iterar = array.forEach(valor => {
    console.log(valor);
});
console.log(iterar); //Imprime undefine

let lista = array.map((valor, indice) => `${indice} : ${valor}`);
console.log(lista);

let listaObjetos = [
    {nombre: "Eleonor", edad: 14},
    {nombre: "Lian", edad: 22},
    {nombre: "Ian", edad: 22},
    {nombre: "Ciel", edad: 4},
    {nombre: "Moenia", edad: 18},
    {nombre: "Athena", edad: 5}
]

let personasMayores = listaObjetos.filter(objeto => objeto.edad >= 18);
console.log(personasMayores);
console.log("***************************************");

let sumaEdades = listaObjetos.reduce((acumulado, current, indice, arrayOriginal)=>{
    return acumulado + current.edad;
    }, 0);      //Al final ubicamos 0 para que el acumulador tome como valor inicial el 0 no el primer elemento del array.
console.log(sumaEdades);
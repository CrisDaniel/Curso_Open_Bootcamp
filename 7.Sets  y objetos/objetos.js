const persona = {
    nombre: "Jorge",
    edad: 34,
    libros: {
        nombre: "El codigo Davinci"
    },
    "4-juegos": {nombre: "pacman"}
}

console.log(persona["edad"]);

const otraEdad = "edad";
console.log(persona[otraEdad]);

const listaPeliculas = [
    {titulo: "Moana", anyo: 2016},
    {titulo: "Escalera al cielo", anyo: 1939},
    {titulo: "Hulk", anyo: 2010},
    {titulo: "Advenger: Era de Ultron", anyo: 2020},
    {titulo: "Camtimflas", anyo: 1930}
];

let orden = listaPeliculas.sort((a,b) => a.anyo - b.anyo);
console.log(orden);

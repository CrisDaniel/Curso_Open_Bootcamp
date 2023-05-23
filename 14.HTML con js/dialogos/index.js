let mostrar = document.querySelector(".btn");

mostrar.addEventListener("click", () =>{
    alert("Hola");
    //Si el confirm es true, imprime el console y si es false no lo imprime
    //confirm("¿Eres humano?") && console.log("Usted es humano");
    //confirm("¿Jugaste dota hoy?") ? console.log("Seguro perdiste") : console.log("¡No te vallas a morir por tanto estudiar XD!");

    let respuesta = confirm("¿Usted es de color verde?");
    if(respuesta){
        console.log("Definitivamente tiene que ir a un psicologo!!");
    }else{
        console.log("Usted no tiene problemas");
    }
});

let infor = document.querySelector(".info");
infor.addEventListener("click", () =>{
    const dato = prompt("¿Cual es tu nombre de vengador?");
    console.log(`Su nombre de Vengador se registro correctamente: "${dato}"`);
});

const lista = [
    {
    nombre: "Cristian",
    edad: 24},
    {
    nombre: "Juanito",
    edad: 24
    },
    {
    nombre: "Raul",
    edad: 25
    }
];

console.table(lista);
let nombre = "Cristian";
saludar(nombre);
function saludar(name){
    console.log(`Hola soy ${name}`);
}

let nombre2 = "Daniel";
despedir(nombre2);
function despedir(name){
    name = "Juan";
    console.log(`Adios ${name}`);
}

let persona = {nombre: "Luis", apellido: "Vega"};
hablar(persona);
function hablar(persona){
    console.log(`Me presento, soy ${persona.nombre} ${persona.apellido}`);
}

function mostrar(numero = 98){  //Parametros por defecto
    console.log(numero);
}
mostrar();

function imprimir(...parametro){
    console.log(parametro);
}
imprimir(1,4, 6, "Eureka", {id: 10});

function suma(...numer){
    return numer.reduce((a, b) => a + b);
}
const s = suma(1, 2, 45, 6);
console.log(s);
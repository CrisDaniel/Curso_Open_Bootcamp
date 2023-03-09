let nombre = "Cristian Daniel";
let apellido = "Revoredo Meza";

let estudiante = nombre.concat(apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let tamañoEstudiante = estudiante.length;
console.log(tamañoEstudiante);

let primerCaracterNombre = nombre.charAt(0);
console.log(primerCaracterNombre);

let ultimoCaracterApellido = apellido[12];
console.log(ultimoCaracterApellido);

let sinEspacio = estudiante.replace(/\s/g, "");
console.log(sinEspacio);

let contenidoNombre = estudiante.includes(`${nombre}`);
console.log(contenidoNombre);
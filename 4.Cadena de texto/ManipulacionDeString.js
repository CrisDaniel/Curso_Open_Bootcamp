let input = "JavaScript";
let lenguajes = "javascript";

console.log(input.toLowerCase());
console.log(lenguajes.toUpperCase());

let concatenado = input.concat(" - ",lenguajes);
console.log(concatenado);
console.log(`${input} _ ${lenguajes}`);

//Eliminar espacios al inicio y al final
let espacios = "      Dejamos un espacio al final de este string. " // 6 espacios al inicio y uno al final
console.log(espacios.length + " caracteres incluyendo los espacios");

let sinEspacio = espacios.trim()    //ELimina todos los espacios
console.log(sinEspacio.length + " caracteres sin espacios");

let espacioInicio = espacios.trimStart();   //Elimina los espacios del inicio del string (6espacios).
console.log(espacioInicio.length + " :sin espacios al inicio");

let espacioFinal = espacios.trimEnd();      //Elimina los espacios del final(1 espacio).
console.log(espacioFinal.length + " :sin espacios al final\n");

//Obtener el caracter en cierta posicion

let caracter = "Universidad JavaScript";
let obteniendoCaracter = caracter.charAt(5);
console.log(obteniendoCaracter);
console.log(caracter[8]);

let obtenerPosicion = caracter.indexOf("J");    //Ubicacion del primer caracter que encuentre
console.log(obtenerPosicion);
console.log(caracter.indexOf("JavaScript"));

console.log(caracter.lastIndexOf("i") + "\n");     //Ubicacion del ultimo caracter que encuentre en el string

//Busqueda de cadenas o carcateres con expresiones regulares

let textoLargo = `Se conoce como darknet al espacio de Internet que busca ocultar y proveer de 
anonimato, a traves del uso de tecnicas criptogr aficas y el uso de diferentes tecnolog ıas de enrutamiento`;
console.log(textoLargo.match(/de/g));

console.log(textoLargo.includes("uso") + "\n");

//Saber si una cadena de texto empieza con una palabra o letra

console.log(textoLargo.startsWith("Se"));

//Saber si un texto terminar con una palabra o letra

console.log(textoLargo.endsWith("amiento"));
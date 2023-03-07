let nombre = 'Cristian';
let string = `Mi nombre es ${nombre}`;

console.log(string);

//Obtener partes de la cadena
//slice() substring() substr()

let slice_string =string.slice(0, 14)   //los parametros bienen a ser el indice inicial y el indice final en este caso(0,14)
console.log(slice_string);

let substring_string = string.substring(4, 8);
console.log(substring_string);

let substr_string = string.substr(4, 8);    //Los parametros son el indice inicial (4) y la longitud que capturara(8), 8 caracteres a partir del indice 4.
console.log(substr_string);

//Remplazar parte de la cadena
let palabra = " el mono rojo, el mono araña, el oso"
let remplazoNombre =  palabra.replace('el', 8);
console.log(remplazoNombre);                    //Solo remplaza el primer caracter o caracteres establecido

//exxpresion regular con replace /g (global)
let remplazaTodo = palabra.replace(/el/g, "Gato");
console.log(remplazaTodo);
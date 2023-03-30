const date = new Date();
console.log(date);

const fechaNacimiento = new Date("13 noviembre 1998");
console.log(fechaNacimiento);

let tarde = date.getFullYear() > fechaNacimiento.getFullYear();
console.log(tarde);

let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

let mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento);

let anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);
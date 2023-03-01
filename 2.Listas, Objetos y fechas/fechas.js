let fecha = new Date();
let fecha_cadena = new Date("november 13 1998");
let fecha_valores = new Date(2002, 1, 22)

console.log(fecha);
console.log(fecha_cadena);
console.log(fecha_valores);

let hora = fecha.getHours();
let minuto = fecha.getMinutes();
let segundos = fecha.getSeconds();

const horaCompleta = hora + " : " + minuto + " : " + segundos;

let dia = fecha.getDay(); //Dia de la semana
let mes = fecha.getMonth();
let año = fecha.getFullYear();

const fechaCompleta = dia + " / " + mes + " / " + año;

console.log(horaCompleta);
console.log(fechaCompleta);
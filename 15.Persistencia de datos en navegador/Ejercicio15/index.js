let nombre_ = "Cristian";
let apellido_ = "Revoredo";

let nombrecompleto = {
    nombre: nombre_,
    apellido: apellido_
}

let fechaActual = new Date();
fechaActual.setTime(fechaActual.getTime() + (2 * 60 * 1000));
let fechaCaducidad = fechaActual.toUTCString();

//sessionStorage.setItem("objetoSesion", JSON.stringify(nombrecompleto));
//localStorage.setItem("objetoLocal", JSON.stringify(nombrecompleto));
//document.cookie = `objetoPersona=${JSON.stringify(nombrecompleto)}; expires=${fechaCaducidad}`;
console.log(document.cookie);
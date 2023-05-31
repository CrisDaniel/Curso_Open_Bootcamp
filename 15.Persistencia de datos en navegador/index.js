//* LOCAL-STORAGE--
//!Crear un localStorage
localStorage.setItem("nombre", "Cristian");
localStorage.setItem("nombre", "Daniel");   //Modificamos el valor

//El JSON.stringify => Convierte un objeto/array en string
localStorage.setItem("persona", JSON.stringify({nombre: "Cristian", edad: 24}));

//!Obtener un localStorage
console.log(localStorage.getItem("nombre"));

//El JSON.parse: Convierte un objeto/array convertido a traves de stringify en objeto de JavaScript
console.log(JSON.parse(localStorage.getItem("persona")));

//!Borrar un localStorage
localStorage.removeItem("nombre");

//* SESSION-STORAGE--
sessionStorage.setItem("apellido", "Revoredo");

//* COOKIES--
document.cookie = "nombreCookie=RevoredoCookie";
document.cookie = "caducidad=caduca;expires=" + new Date(2023, 5, 1).toUTCString();
console.log(document.cookie);

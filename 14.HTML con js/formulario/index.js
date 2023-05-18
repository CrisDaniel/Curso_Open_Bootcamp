const f = document.getElementById("formulario");
f.addEventListener("submit", evento =>{
    console.log(evento);
    evento.preventDefault();
})
let text = document.getElementById("h-text");
console.log(text);

text.addEventListener("cambioTexto", evento =>{
    console.log(evento.detail);
    text.innerHTML = evento.detail.texto;
    text.style.color = evento.detail.color;
    text.style.fontSize = evento.detail.tamañoFuente;
    text.style.border = evento.detail.border;
})

function cambioTexto(nuevoText, color, tamañoFuente, border){
    let evento = new CustomEvent("cambioTexto", {
        detail:{
            texto: nuevoText,
            color,
            tamañoFuente,
            border
        }
    })
    text.dispatchEvent(evento);
}

//cambioTexto("Hola MUNDO", "darkcyan", "42px", "2px solid black");
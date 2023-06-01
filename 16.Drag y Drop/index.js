let parrafos = document.querySelectorAll(".parrafo");
let secciones = document.querySelectorAll(".seccion");
let papelera = document.querySelector(".papelera");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        //console.log(`Estoy arrastrando el parrafo: ${parrafo.innerHTML}`);
        parrafo.classList.add("agregado");
        event.dataTransfer.setData("id", parrafo.id);

        //img
        let img = document.querySelector(".img");
        event.dataTransfer.setDragImage(img, 0, 0);
    });

    parrafo.addEventListener("dragend", () => {
        //console.log(`Termine de arrastrar`);
        parrafo.classList.remove("agregado");
    });
});

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event =>{ //El evento dragover se activa cuando un elemento esta moviendose dentro de seccion usando drag
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        //console.log("DragOver");
    });

    seccion.addEventListener("drop", event =>{
        //console.log("drop");
        let idParrafo = event.dataTransfer.getData("id");
        
        let parrafo = document.getElementById(idParrafo);
        seccion.appendChild(parrafo);
    })
});

papelera.addEventListener("dragover", event => {
    console.log("Sobre la papelera");
    event.preventDefault();
})
papelera.addEventListener("drop", event =>{
    let idParrafo = event.dataTransfer.getData("id");
    let parrafo = document.getElementById(idParrafo);
    parrafo.remove(parrafo);
    console.log("Se elimino el parrafo: "+parrafo.id);
});
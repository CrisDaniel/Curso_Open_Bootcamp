//!$(selector).accion();

//?Oculta el h1         Oculta un poco mas despacio
//$('h1').hide();       $('h1').fadeOut();  

//?Muestra el h1        Muestra un poco mas despacio
//$('h1').show();       $('h1').fadeIn();  


//?Esto es lo mismo que el $(() => { })
//$(document).ready(() =>{
$(() =>{
    //!$("#Py").hide();

    $(".hide-btn").click(() => {
        $("h1").fadeOut();
    });

    $(".show-btn").click(() => {
        $("h1").fadeIn();
    });

    $("li").click(() =>{
        $("h1").css({color: "red"});
    });

    $("h2").dblclick(() =>{
        $("h2").css({color: "darkcyan", background: "cyan"});
    });

    //Para añadir un nuevo elemento al final
    let a = 1;
    $(".add-element").click(() =>{
        $("ul").append(`<li>Last Element ${a++}</li>`);
    })
    
    //Para añadir un nuevo elemento al principio
    let b = 1;
    $(".new-element").click(() =>{
        $("ul").prepend(`<li>First Element ${b++}</li>`);
    });

    //Para cambiar el color cuando el mouse esta por encima de los "li"
    $("li").mouseenter((element) =>{
        element.target.style.color = "blue";
    });

    //Para regresa a su color normal black
    $("li").mouseleave((element) =>{
        element.target.style.color = "black";
    });
});

function diasSemana(dia){
    switch(dia){
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miercoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sabado"); break;
        case 7: console.log("Domingo"); break;
        default: console.log("Valor excedido de entre el 1 -7");  break;
    }
}

let dia = diasSemana(9);
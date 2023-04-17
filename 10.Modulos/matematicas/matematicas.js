function suma(a, b){
    return a + b;
}

function multiplicacion(a, b){
    return a * b;
}

function potenciacion(a, b){
    return a ** b;
}

function factorial(a){
    let factorial = 1;
    for(let i = 1; i <= a; i++){
        factorial *= i; 
    }
    return factorial;
}

//Exportaremos estas funciones, las haremos publicas para el acceso desde otros archivos que permiten importar
module.exports = {
    multiplicacion,
    suma,
    potenciacion,
    factorial
}
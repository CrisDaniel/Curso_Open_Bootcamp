export function suma(a, b){
    return a + b;
}

export function multiplicacion(a, b){
    return a * b;
}

export function potenciacion(a, b){
    return a ** b;
}

export function factorial(a){
    let factorial = 1;
    for(let i = 1; i <= a; i++){
        factorial *= i; 
    }
    return factorial;
}

export let operaciones = `${suma.name} -:- ${multiplicacion.name} -:- ${potenciacion.name} -:- ${factorial.name}`;
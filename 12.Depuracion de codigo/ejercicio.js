function fibonacci(num){
    let secuenciaFibonacci = [1];
    suma = 1;

    for (let i = 0; i < num-1; i++) {
        secuenciaFibonacci.push(suma);
        suma = suma + secuenciaFibonacci[i];
    }

    return secuenciaFibonacci;
}

console.log(fibonacci(9));
//1,1,2,3,
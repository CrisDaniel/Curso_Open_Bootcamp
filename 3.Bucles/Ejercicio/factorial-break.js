//calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 1;
let contador = 1;

loopFactorial: while (true) {
    if (contador > 10) {
        break loopFactorial;
    } else {
        factorial *= contador;
        contador++;
    }
}

console.log(factorial);
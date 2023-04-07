function* generarID(){  //function*() => es una funcion feneradora(iteradora)
    let id = 0;
    while(true){
        id++;
        if(id===10){
            return id;
        }
        yield id;   //Devuelve el id y espera hasta que se llamada nuevamente.
    }
}

let generadora = generarID();

console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
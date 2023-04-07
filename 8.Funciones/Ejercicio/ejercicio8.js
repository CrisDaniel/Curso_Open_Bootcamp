function verdadero(){
    return true;
}
console.log(verdadero());

function asincrono(){
    let promesa = new Promise((resolve, reject) =>{
        if(true){
            resolve();
        }else{
            reject();
        }
    });
    promesa.then(() => console.log("Hola soy una promesa"));
}
setTimeout(asincrono, 5000);

function* generadorID(){
    let id = 0;
    while(id < 10){
        id +=2;
        yield id;
    }
}
for (let idMostrar of generadorID()) {
    console.log(idMostrar);
}
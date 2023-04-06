function myAsync(){
    //Hace un llamado a una base de datos
    //Puede darnos algun error
}

const miPromesa = new Promise((resolve, reject) =>{
    const i = Math.floor(Math.random() * 2);
    //Si esta correcto
    if(i !==0){
        resolve();
    }else{
        reject();
    }
})

miPromesa
.then(() => console.log("Funciona  correctamente"))
.catch(() => console.log("ERROR"))
.finally(() => console.log("Siempre me ejecuto, exista ERROR o no"));
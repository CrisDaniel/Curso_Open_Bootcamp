const miFuncion = valor =>{
    if(typeof valor == "number"){
        return valor * 2;
    }
    throw new Error("El valor debe ser numerico");
}

//console.log(miFuncion(13));

let numero = "16";
try{
    const doble = miFuncion(numero);
    console.log(doble);
    console.log("Ejecutandose...")
}catch(e){
    console.error("ERROR DE CODIGO!");
    console.error(e);
}finally{
    console.log("Esta funcion se ejecuta con o sin ERROR")
}
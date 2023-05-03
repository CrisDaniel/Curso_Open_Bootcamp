class Persona{
    nombre;
    edad;
    isDeveloper;

    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo(){
        console.log("Hola! mi nombre es " + this.nombre + " y tengo " + this.edad + " años.")
    }

}

const persona1 = new Persona("Cristian", 24, true); //Instanciar
console.log(persona1);
persona1.saludo()
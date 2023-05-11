//TODO HERENCIAS
class Persona{
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo(){
        return `Hola mi nombre es ${this.nombre}, tengo ${this.edad} años`;
    }
}

class Desarrollador extends Persona{
    constructor(nombre, edad, isDeveloper, lenguaje){
        super(nombre, edad, isDeveloper);
        this.lenguaje = lenguaje;
    }

    //TODO POLIMORFISMO
    saludo(){   //!Override: Definir algo que ya esta definido.
        return `${super.saludo()} y programo en ${this.lenguaje}`;
    }
}

let developer = new Desarrollador("Cristian", 24, true, "JavaScript.");
console.log(developer.saludo());


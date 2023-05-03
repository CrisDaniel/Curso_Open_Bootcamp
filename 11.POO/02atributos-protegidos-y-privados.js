class Persona{

    //Private => #
    //Solo se puede obtener desde dentro de la clase
    #nombre;
    #edad;
    //#obtenerEdad;

    //Protected => _
    //Solo se puede acceder desde dentro de la clase y desde clases hijas
    _isDeveloper = true;

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saludo(){
        console.log("Hola! mi nombre es " + this.#nombre + " y tengo " + this.#edad + " años.")
    }

    #obtenerEdad(){
        return this.#edad;
    }

}

const persona1 = new Persona("Jorge", 36);
persona1.saludo();
//console.log(persona1.#obtenerEdad());
console.log(persona1._isDeveloper);
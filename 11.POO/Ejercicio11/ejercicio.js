class Estudiante{
    constructor(nombre, asignaturas){
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    obtenDatos(){
        return `Mi nombre es ${this.nombre} y mis asignaturas son: ${this.asignaturas}`;
    }
}

let estudiante = new Estudiante("Cristian", ["JavaScript", " HTML", " CSS"]);
console.log(estudiante.obtenDatos());
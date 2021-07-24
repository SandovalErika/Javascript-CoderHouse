// Object Constructor

function Persona (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.hablar = function () {console.log("Hola, mi nombre es: " + this.nombre + " " +this.apellido)}
    
}

const Persona1 = new Persona("Monica", "Sanchez")
const Persona2 = new Persona("Erika", "Sandoval");
const Persona3 = new Persona("Liliana", "Lasarte");
const Persona4 = new Persona("Pablo", "Miguelo");
const Persona5 = new Persona("Brenda", "Ferreyra");
const Persona6 = new Persona("Paulina", "Bonello");



Persona1.hablar();
Persona2.hablar();
Persona3.hablar();
Persona4.hablar();
Persona5.hablar();
Persona6.hablar();
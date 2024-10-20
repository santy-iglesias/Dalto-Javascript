// Programación Orientada a Objetos (POO)


// Modularización: Dividir un problema grande en problemas más pequeños.


class Animal {
                // Abstraccion
    constructor(especie , edad , color) {
        
        // Propiedades:
        
        // Lo de la izquierda son "PROPIEDADES"
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
    }

    // Métodos:
    verInfo() {
        document.write(this.info + "<br>");
    }

}


// Herencia: Crear una nueva clase que tome todas las propiedades y métodos de una clase anterior, y que además agregue ciertas cosas.
class Perro extends Animal {
    
    // Propiedades:
    constructor(especie , edad , color , raza) {
        super(especie , edad , color);       // Lo hereda de la clase "animal"
        this.raza = null;
    }

    // Métodos:

    // Métodos estáticos: No utilizan ninguna de las propiedades del objeto.
    static ladrar() {
        alert("¡Wow!");
    }

    // Métodos "set": se utilizan para modificar el valor de una propiedad.
    set setRaza(newName) {
        this.raza = newName;
    }

    // Métodos "get": se utilizan para obtener información.
    get getRaza() {
        return this.raza;
    }


    /* En la mayoría de los lenguajes, los getters y los setters se utilizan para acceder a propiedades privadas o en caso de "javascript", a datos encapsulados. */

}


// No se puede tener un objeto con el mismo nombre que una clase.


// Creando objetos:
const perro = new Perro("perro" , 5 , "marron" , "Dobbermann");
const pajaro = new Animal("pajaro" , 2 , "rojo");
const gato = new Animal("gato" , 3 , "blanco");
const panda = new Animal("panda" , 6 , "blanco y negro");


perro.setRaza = "Pedro";
document.write(perro.getRaza);

Perro.ladrar();    // "Perro" es la clase.

// pajaro.verInfo();
// gato.verInfo();
// panda.verInfo();
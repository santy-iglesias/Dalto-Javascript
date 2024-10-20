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
        this.raza = raza;
    }

    // Métodos:
    ladrar() {
        alert("¡Wow!");
    }

}


// No se puede tener un objeto con el mismo nombre que una clase.


// Creando objetos:
const perro = new Perro("perro" , 5 , "marrón" , "Pastor Alemán");        // Este objeto de la clase "Perro" heredó el método "verInfo" de la clase "Animal".
const pajaro = new Animal("pajaro" , 2 , "rojo");
const gato = new Animal("gato" , 3 , "blanco");
const panda = new Animal("oso" , 6 , "blanco y negro");


perro.verInfo();
perro.ladrar();

pajaro.verInfo();
gato.verInfo();
panda.verInfo();

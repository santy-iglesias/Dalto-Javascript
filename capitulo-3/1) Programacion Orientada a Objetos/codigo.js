// Programación Orientada a Objetos (POO)

class animal {

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


// Creando un objeto de la clase "animal":
const perro = new animal("perro" , 5 , "marrón");

console.log(perro);   // Para mostrar en la consola del navegador

// document.write(perro.info + "<br>");



// Creando más objetos:
const pajaro = new animal("pajaro" , 2 , "rojo");
const gato = new animal("gato" , 3 , "blanco");
const panda = new animal("oso" , 6 , "blanco y negro");


// document.write(pajaro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(panda.info + "<br>");

perro.verInfo();
pajaro.verInfo();
gato.verInfo();
panda.verInfo();

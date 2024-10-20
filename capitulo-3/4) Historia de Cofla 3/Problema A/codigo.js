/* A) Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular. De todos los modelos que hay disponibles en esa tienda, A Cofla
le llamaron la atención 3 teléfonos específicamente. El problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada... pero claro:
él antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahí entramos nosotros:

                            CREAR SOLUCIONES:
                            
                            - Crear un sistema para mostrarle a Cofla las particularidades de los 3 celulares.
                            - Cada celular debe tener color, peso, tamaño, resolución de cámara y memoria ram.
                            - Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar.                                                                        */


class Celular {

    // Propiedades:
    constructor(color , peso , tamaño , resCamara , ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = resCamara;
        this.memoriaRam = ram;
        this.encendido = false;
    }


    // Métodos:
    prender() {          
        if(this.encendido == false)
        {
            alert("Celular encendido");
            this.encendido = true;
        }
        else
        {
            alert("El celular ya esta encendido");
        }
    }

    apagar() {          
        if(this.encendido == true)
        {
            alert("Celular apagado");
            this.encendido = false;
        }
        else
        {
            alert("El celular ya esta apagado");
        }
    }

    reiniciar() {
        if(this.encendido == true)
        {
            alert("Reiniciando celular");
        }
        else
        {
            alert("El celular está apagado");
        }
    }

    tomarFoto() {
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }

    grabarVideo() {
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }

    mobileInfo() {
        return `
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Tamaño: <b>${this.tamaño}</b> <br>
        Resolución de Cámara: <b>${this.resolucionDeCamara}</b> <br>
        Memoria RAM: <b>${this.memoriaRam}</b> <br> 
        `
    }
}


// Creando objetos:
celular1 = new Celular("rojo" , "150 g" , "5 pulgadas", "HD" , "2GB");
celular2 = new Celular("negro" , "165 g" , "5.3 pulgadas" , "Full HD" , "2.5GB");
celular3 = new Celular("blanco" , "170 g" , "5.8 pulgadas" , "Full HD" , "3GB");



document.write(`
    CELULAR 1: <br>
    ${celular1.mobileInfo()} <br>
    
    CELULAR 2: <br>
    ${celular2.mobileInfo()} <br>
    
    CELULAR 3: <br>
    ${celular3.mobileInfo()} <br>
    `);


// celular1.prender();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.apagar();
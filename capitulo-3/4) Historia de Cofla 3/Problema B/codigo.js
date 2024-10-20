/* B) Cofla no está satisfecho con los celulares asi que decide ir a la sección de celulares de alta gama, donde va a poder encontrar los celulares más caros del lugar, así
que al entrar vió dos celulares que le encantaron. Estos 2 celulares de alta gama pueden hacer todo los que podían hacer los 3 anteriores pero tienen mejores características y
además pueden grabar en cámara super lenta, tiene reconocimiento facial y una cámara extra. 


                - Implementar todas estas cualidades en los celulares de alta gama.                                                                                          */



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
        `;
    }
}


class CelularAltaGama extends Celular {
    
    // Propiedades:
    constructor(color , peso , tamaño , resCamara , ram , resCamaraExtra) {
        super(color , peso , tamaño , resCamara , ram);
        this.resolucionCamaraExtra = resCamaraExtra;
    }



    // Métodos:
    grabarVideoCamaraLenta() {
        alert("Estas grabando en 'Cámara Super Lenta'");
    }

    reconocimientoFacial() {
        alert("Vamos a iniciar un reconocimiento facial");
    }

    infoAltaGama() {
        return this.mobileInfo() + `
        Resolución de Cámara Extra: <b>${this.resolucionCamaraExtra}</b> <br>`;
    }
}

                            
// Creando objetos:
// const celular1 = new Celular("rojo" , "150 g" , "5 pulgadas", "HD" , "2GB");
// const celular2 = new Celular("negro" , "165 g" , "5.3 pulgadas" , "Full HD" , "2.5GB");
// const celular3 = new Celular("blanco" , "170 g" , "5.8 pulgadas" , "Full HD" , "3GB");



// document.write(`
//     CELULAR 1: <br>
//     ${celular1.mobileInfo()} <br>
    
//     CELULAR 2: <br>
//     ${celular2.mobileInfo()} <br>
    
//     CELULAR 3: <br>
//     ${celular3.mobileInfo()} <br>
//     `);


const celular4 = new CelularAltaGama("rojo" , "130 g" , "5.2 pulgadas" , "4K" , "3GB" , "Full HD");
const celular5 = new CelularAltaGama("negro" , "142 g" , "6 pulgadas" , "4K" , "3GB" , "HD");

document.write(`
    Celulares de Alta Gama: <br>
    CELULAR 1: <br>
    ${celular4.infoAltaGama()} <br>
    
    CELULAR 2: <br>
    ${celular5.infoAltaGama()} <br>
    `);
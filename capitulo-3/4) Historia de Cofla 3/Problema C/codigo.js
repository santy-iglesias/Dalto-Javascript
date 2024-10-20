/* C) Cofla ya tiene su nuevo celular y ahora está mirando las aplicaciones de la Play Store ya que quiere jugar juegos que sean muy populares, que tengan buena puntuación
y que pesen poco, pero las 7 apps que llamaron su atención son un tanto similares y sabe que si descarga todas, probablemente juegue con todas, pero él se va a descargar solo
2 para tener perdidas innecesarias de tiempo jugando juegos con su celular, pero el problema viene cuando no puede decidirse cual de todas estas aplicaciones es la que va a
descargar. 


                            CREAR SOLUCIONES
                            
                            - Crear un sistema que ayude a Cofla a decidir cuál app descargar.
                            - La información de los instaladores debe contener la cantidad de descargar, la puntuación y el peso.
                            - Las apps se deben poder instalar, abrir, cerrar y desinstalar.                                                                               */


class Aplicacion {

    // Propiedades:
    constructor(descargas , puntuacion , peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;

        this.iniciada = false;
        this.instalada = false;
    }


    // Métodos:
    instalar() {
        if (this.instalada == false)     // Este "if" no es necesario.
        {
            this.instalada = true;
            alert("Instalando aplicación...");
            alert("Aplicación instalada correctamente");
        }
        else
        {
            alert("La aplicación ya ha sido instalada anteriormente");
        }
    }

    abrir() {
        if(this.instalada == false)          // Este "if" no es necesario.
        {
            alert("Aún no se ha instalado la aplicación");
        }
        else if(this.instalada == true  &&  this.iniciada == false)
        {
            this.iniciada = true;
            alert("Abriendo aplicación...");
        }
        else
        {
            alert("La aplicación ya está abierta");
        }
    }

    cerrar() {
        if(this.instalada == false)           // Este "if" no es necesario.
        {
            alert("Aún no se ha instalado la aplicación");
        }
        else if(this.instalada == true  &&  this.iniciada == true)
        {
            this.iniciada = false;
            alert("Cerrando aplicación...");
        }
        else
        {
            alert("La aplicación ya está cerrada");
        }
    }

    desinstalar() {
        if (this.instalada == true)
        {
            this.instalada = false;
            alert("Desintalando aplicación...");
            alert("Aplicación desinstalada correctamente");
        }
        else
        {
            alert("La aplicación ya ha sido desinstalada anteriormente");
        }
    }

    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b> <br>
        Puntuación: <b>${this.puntuacion}</b> <br>
        Peso: <b>${this.peso}</b> <br>`;
    }
}


const app1 = new Aplicacion("16.000" , "4.6 estrellas" , "900 MB");
const app2 = new Aplicacion("22.000" , "4.8 estrellas" , "740 MB");
const app3 = new Aplicacion("10.000" , "3 estrellas" , "500 MB");
const app4 = new Aplicacion("7.000" , "2 estrellas" , "790 MB");
const app5 = new Aplicacion("16.000" , "4.1 estrellas" , "800 MB");
const app6 = new Aplicacion("13.000" , "3.7 estrellas" , "400 MB");
const app7 = new Aplicacion("28.000" , "4.8 estrellas" , "930 MB");


// app1.instalar();
// app1.abrir();                        Funciona todo correctamente
// app1.cerrar();
// app1.desinstalar();


document.write(`
    Aplicacion 1: <br>
    ${app1.appInfo()} <br>
    
    Aplicación 2: <br>
    ${app2.appInfo()} <br>

    Aplicación 3: <br>
    ${app3.appInfo()} <br>

    Aplicación 4: <br>
    ${app4.appInfo()} <br>

    Aplicación 5: <br>
    ${app5.appInfo()} <br>

    Aplicación 6: <br>
    ${app6.appInfo()} <br>

    Aplicación 7: <br>
    ${app7.appInfo()} <br>
    `);
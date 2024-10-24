/* B) La facultad de Cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos los alumnos que se anotaron en dichas clases, pero
necesitamos ver esto más ordenadamente.

                                
                                        CREAR SOLUCIONES
                                        
                                        - Crear una función que al pasarle como parámetro la materia nos devuelva:
                                                                * profesor asignado
                                                                * el nombre de todos los alumnos
                                                                 
                                        - Crear función que nos diga en cuantas materias está Cofla.
                                        - Nombrar las materias en las que está y los profesores de cada una.                                                               */


// Funciones:

const obtenerInformacion = (materia) => {
    const materias = {
        fisica: ["Perez","pedro","cofla","juan","maria"],
        programacion: ["Dalto","pedro","cofla","juan"],
        logica: ["Hernandez","pedro","cofla","juan","maria","santiago"],
        quimica: ["Rodriguez","pedro","cofla","juan","maria","santiago"],
    }

    // Si hay coincidencia con algunas de las materias ingresadas:
    if(materias[materia] !== undefined)
    {
        return [materias[materia] , materia , materias];
    }
    else
    {
        return materias;
    }
}


const mostrarInformacion = (materia) => {

    let informacion = obtenerInformacion(materia);

    if(informacion !== false)
    {
        let profesor = informacion[0].shift();

        let alumnos = informacion[0];

        document.write(`El profesor de "<b>${informacion[1]}</b>" es: <b style='color: #25f'>${profesor}</b> <br>
            Los alumnos son: <b>${alumnos}</b> <br><br>`);
    }
}


const cantidadDeClases = (alumno) => {

    let informacion = obtenerInformacion()
    let cantidadTotal = 0;
    let clasesPresentes = []

    for(info in informacion)
    {
        if(informacion[info].includes(alumno))
        {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }

    return `<b style='color:blue'>${alumno}</b> está en ${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b> <br><br>`;
}








mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");


document.write( cantidadDeClases("cofla") );
document.write( cantidadDeClases("maria") );
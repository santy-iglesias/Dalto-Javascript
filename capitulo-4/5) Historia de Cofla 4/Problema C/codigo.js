/* C) Cofla ya vió las 12 materias y se decidió en cual se va a inscribir asi que en tres días lo hará, el problema es que se rompió el sistema de inscripciones.


                                CREAR SOLUCIONES
                                
                                - Crear una función para preguntarle a Cofla en que materias se quiere inscribir.
                                - Si ya hay 20 alumnos anotados en la materia negarle la inscripción.
                                - Si hay menos de 20 alumnos inscribir a Cofla y añadirlo a la lista de alumnos.                                                      */



let materias = {
    fisica: ["Perez","pedro","cofla","juan","maria"],
    programacion: ["Dalto","pedro","cofla","juan"],
    logica: ["Hernandez","pedro","cofla","juan","maria","santiago"],
    quimica: ["Rodriguez","pedro","cofla","juan","maria","santiago"],
}


const inscribir = (alumno , materia) => {

    let personas = materias[materia];


    if(personas.length >= 21)
    {
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas.`);
    }
    else
    {
        personas.push(alumno);

        if(materia == "fisica")
        {
            materia = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica'],
            }
        }
        else if (materia == "programacion")
        {
            materia = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica'],
            }
        }
        else if (materia == "logica")
        {
            materia = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica'],
            }
        }
        else if (materia == "quimica")
        {
            materia = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas,
            }
        }

        document.write(`¡Felicidades ${alumno}! Te inscribiste a ${materia} correctamente.`);
    }
}




document.write(materias["fisica"] + "<br><br>");

inscribir("pedrito" , "programacion");

document.write(materias["fisica"] + "<br><br>");





// Revisar despues
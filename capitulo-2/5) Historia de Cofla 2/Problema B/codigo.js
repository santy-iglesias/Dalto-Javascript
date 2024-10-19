/* B) Cofla vuelve de la comisaría exhausto y por lo cansado que estaba se fue a dormir...

Al otro día comienzan las clases del ciclo básico de la universidad (porque cofla quiere ser programador y se inscribió en la facultad de ingeniería para estudiar desarrollo
de software.

En su curso hay en total 19 alumnos, pero surgió un problema que complicó un poco a la facultad: se rompió el sistema de registros de asistencias y durante los próximos 30 días
no se podrán hacer registros de datos de ningún tipo, por ende las clases no podrán comenzar hasta que esto este solucionado.

            - Crear un mini-sistema que nos permita registrar los alumnos que están presentes (P) y ausentes (A) en clase.
            - Pasados los 30 días mostrar la situación final de todos los alumnos (Nro total de presentes y ausentes).
            - Se puede tener un máximo de 10% de ausencias por semestre, si se tienen más aclarar que está reprobado.                                                       */


let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

// Llenando el array:
for (let i = 0 ; i < cantidad ; i++)
{
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1) + ":") , 0];
}


const tomarAsistencia = (nombre , posicion) => {
    let presencia = prompt(nombre);

    if(presencia == "p" || presencia == "P")
    {
        alumnosTotales[posicion][1]++;                             // lucas , 0        (De esta forma seleccionamos el "0")
    }
}


// Tomando asistencia 30 dias: 
for (let i = 0 ; i < 30 ; i++)
{
    for (alumno in alumnosTotales)
    {
        tomarAsistencia( alumnosTotales[alumno][0] , alumno );
    }
}



// Mostrando los datos recopilados en pantalla:
for (alumno in alumnosTotales)
{
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    Asistencias: ${alumnosTotales[alumno][1]} <br>
    Ausencias: ${ 30 - alumnosTotales[alumno][1] } <br>`;

    
    // Si se pasan de inasistencias se muestra un mensaje que dice "Reprobado por inasistencias":
    if( 30 - alumnosTotales[alumno][1] > 18 )
    {
        resultado += "<b style='color:red'>Repobrado por inasistencias</b> <br> <br>";
    }
    else
    {
        resultado += "<br> <br>";
    }

    document.write(resultado);
}


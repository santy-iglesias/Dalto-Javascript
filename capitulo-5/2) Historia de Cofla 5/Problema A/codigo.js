/* A) Terminó el primer semestre y Cofla no sabe si aprobará o no las materias, para lograrlo necesitará:

- Contar con al menos el 90% de asistencia.
- EL promedio por materia debe ser de al menos 7 / 10.
- Debe tener al menos el 75% de los  trabajos prácticos entregados.



                        CREAR SOLUCIONES
                        
                        - Solicitar los datos y decirle si aprueba o no.
                        - Mostrar todo esto con colores representativos en consola (ej: no probar en rojo).
                        - Todo esto estructurado como tabla.                                                                    */



const materias = {
    fisica: [90 , 6 , 4 , "Fisica"],              // 0: porcentaje de asistencias,  1: promedio , 2: cantidad de TPs , 3: nombre de materia
    matematica: [84 , 8 , 2 , "Matematica"],
    logica: [92 , 8 , 4 , "Logica"],
    quimica: [96 , 8 , 4 , "Quimica"],
    calculo: [91 , 6 , 3 , "Calculo"],
    programacion: [79 , 9 , 4 , "Programacion"],
    biologia: [75 , 9 , 2 , "Biologia"],
    basesDeDatos: [98 , 9 , 1 , "Bases de Datos"],
    algebra: [100 , 10 , 4 , "Algebra"],
}



const aprobar = () => {

    for(materia in materias)
    {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];



        console.log(`${materias[materia][3]}`);

        if(asistencias >= 90)
        {
            console.log("%c   Asistencias en orden" , "color: green");
        }
        else
        {
            console.log("%c   Falta de asistencias" , "color: red");
        }

        if(promedio >= 7)
        {
            console.log("%c   Promedio en orden" , "color: green");
        }
        else
        {
            console.log("%c   Promedio desaprobado" , "color: red");
        }

        if(trabajos >= 3)
        {
            console.log("%c   Trabajos Prácticos en orden" , "color: green");
        }
        else
        {
            console.log("%c   Faltan Trabajos Prácticos" , "color: red");
        }
    }
}


aprobar();
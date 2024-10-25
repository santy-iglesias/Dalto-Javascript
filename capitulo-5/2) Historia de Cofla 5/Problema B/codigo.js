/* B) Cofla está sufriendo un poco... ya que, a pesar de que cree contar con el 90%  de asistencias y tener un promedio mayor a  7 / 10 , no cree poder entregar el 75% de los 
trabajos prácticos ya que necesita dividir las tareas que hará semanalmente. Cofla debe: trabajar 8 horas por día durante 2 semanas entre las cuales tiene: 24 horas para
estudiar, 24 horas para hacer trabajos prácticos, 56 horas para trabajar y 8 horas para hacer las cosas de la casa.  


                                    CREAR SOLUCIONES

                                    - Organizar las actividades diariamente.
                                    - Utilizar la consola para organizar todo.
                                    - El tiempo por tarea no debe superar las 4 horas.
*/


let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de hacer trabajos prácticos";
let homework = "30 minutos de tareas de la casa";
let descanso = "10 minutos de descanso";



console.log("TAREAS");

for(let i = 0 ; i < 14 ; i++)
{
    if(i == 0)
    {
        console.group("Semana 1");
    }

    console.groupCollapsed( "Dia " + (i+1) );
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();


    if(i == 6)
    {
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}

console.groupEnd();        // Para cerrar el grupo semana 2
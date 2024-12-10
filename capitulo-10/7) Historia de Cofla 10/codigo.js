/* A) Las mesas de examen finalizaron y el profesor le tomó un último examen especial a Cofla, ya Cofla hizo 2 pruebas más, pero lamentablemente
se rompió el sistema de inscripción de notas. Por ende, habrá que crear una solución a este problema, desarrollando una web que sea capaz de 
simular su funcionamiento.


                    - Crear una mini interfaz para introducir nota
                    
                    - Validar que no haya errores

                    - Se debe promediar la nota del profesor, con otras 2 notas de trabajos anteriores

                    - Si el promedio es mayor a 7/10 -> aprobó la materia
*/

const botonEnviar = document.getElementById("enviar-nota");


botonEnviar.addEventListener("click" , ()=>{
    
    let resultado, mensaje, prueba;
    
    try {
        prueba = parseInt( document.getElementById("nota-alumno").value );
       
        // Si el resultado es "NaN":
        if( isNaN(prueba) )
        {
            throw "Gracioso";
        }


        resultado = verificarAprobacion(8 , 5 , prueba);
        mensaje = definirMensaje(prueba);
    }
    catch(e)
    {
        resultado = "¿SOS GRACIOSO?";
        mensaje = "He descubierto que intentaste hackear el sitio.";
    }

    
    abrirModal(resultado[0] , mensaje);
});



//------------------------------------------------------ Funciones ---------------------------------------------------------------------------------

const verificarAprobacion = (nota1 , nota2 , prueba)=> {
    
    let promedio;

    promedio = (nota1 + nota2 + prueba) / 3; 


    if(promedio >= 7)
    {
        // Array que se guarda en la variable "resultado":
        return ["<span class='green'>APROBADO</span>" , Math.round(promedio)];
    }
    else
    {
        // Array que se guarda en la variable "resultado":
        return ["<span class='red'>DESAPROBADO</span>" , Math.round(promedio)];
    }
}


const definirMensaje = (prueba)=> {
    
    let mensaje;

    switch(prueba)
    {
        case 1: mensaje = "No podes ser tan HDP";
        break;

        case 2: mensaje = "Sos malisimo para mi materia";
        break;
            
        case 3: mensaje = "No sabes casi nada";
        break;

        case 4: mensaje = "Muy mal";
        break;

        case 5: mensaje = "Mal";
        break;

        case 6: mensaje = "Regular";
        break;

        case 7: mensaje = "Bien, pero pueda mejorar";
        break;

        case 8: mensaje = "¡Muy bien!";
        break;

        case 9: mensaje = "¡Excelente!";
        break;

        case 10: mensaje = "¡Insuperable!";
        break;


        default: mensaje = null;
    }

    return mensaje;
}


const abrirModal = (resultado , mensaje)=> {

    document.querySelector(".resultado").innerHTML = resultado;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + mensaje;



    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}
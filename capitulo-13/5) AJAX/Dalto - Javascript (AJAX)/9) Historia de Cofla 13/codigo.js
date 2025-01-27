/* Cofla ya está cursando el último semestre en la universidad. Efectivamente tuvo todo lo necesario para pasar de año, peeero él tiene una duda,
quiere saber cuántas personas que cursan el último semestre se reciben y cuántas no. Esta información la tiene una API de su universidad a la que
el tiene fácil acceso.       


                                - Crear un sistema para obtener esa información
                                - Mostrarla ordenadamente en un sitio web
*/


const getInfo = async ()=> {
    
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");

    try {
        let resultado = await axios("archivo.txt");
        // console.log(resultado);

        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;

    } catch(error) {
        aprobados.innerHTML = "La API falló.";
        desaprobados.innerHTML = "La API falló.";
    }
}



document.getElementById("getInfo").addEventListener("click" , getInfo);
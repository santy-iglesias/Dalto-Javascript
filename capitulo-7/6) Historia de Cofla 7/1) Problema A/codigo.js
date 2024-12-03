/* 1) Despues de aprobar, Cofla se compra una mejor computadora para poder programar mejor y hacer todo de una forma más óptima pero necesita
una mejor resolución.


                - Debe ser al menos FULL HD.
                - Cuando la este por comprar, preguntarle si está seguro de eso.                                       */

let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;


/* "screen.availHeight" es la altura que puede tener la window del browser si está maximizada, incluidas las barras del browser mientras que
"screen.height" básicamente es el alto total de la pantalla.  */



let comprar = confirm(`El alto es: ${alto}
El ancho es: ${ancho}`);


if(comprar == true)
{
    alert("Compra realizada exitosamente!");
}
else
{
    alert("Compra cancelada.");
}
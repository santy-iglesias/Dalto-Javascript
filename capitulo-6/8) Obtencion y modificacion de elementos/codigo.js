// Obtención y modificación de elementos

const titulo = document.querySelector(".titulo");
let resultado;



// "textContent"  -  Devuelve TODO el texto de cualquier nodo.

document.write(`<b>textContent</b>:  <br><br>`);

resultado = titulo.textContent;
document.write(resultado);

document.write("<br><br><br><br>");



// "innerText"  -  Devuelve el texto VISIBLE de un nodo element.  (NO ES ESTÁNDAR Y NO ES RECOMENDABLE SU USO)

document.write(`<b>innerText</b>:  <br><br>`);

resultado = titulo.innerText;
document.write(resultado);

document.write("<br><br><br><br>");




// "outerText"  -  devuelve el texto que de las etiquetas de las etiquetas HTML incluidas las etiquetas.  (NO SE USA MÁS)

document.write(`<b>outerText</b>:  <br><br>`);

resultado = titulo.outerText;
document.write(resultado);

document.write("<br><br><br><br>");




// "innerHTML"  -  Devuelve el contenido HTML de un elemento.

resultado = titulo.innerHTML;
alert("innerHTML:  " + resultado);
// Con "document.write()" no se muestra.




// "outerHTML"  -  Devuelve el código HTML completo del elemento.

resultado = titulo.outerHTML;
alert("outerHTML:  " + resultado);
// Con "document.write()" no se muestra.
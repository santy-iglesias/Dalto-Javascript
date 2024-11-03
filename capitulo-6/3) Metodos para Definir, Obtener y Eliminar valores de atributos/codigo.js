// Métodos para Definir, Obtener y Eliminar atributos

const rangoEtario = document.querySelector(".rangoEtario");


// setAtributte()  -  Modifica el valor de un atributo.  ------------------------------------------------------------------------------------------------------------------------

rangoEtario.setAttribute("type" , "text");         // Primer parametro: atributo que se quiere modificar  ,  Segundo parametro: nuevo valor


// getAtributte()  -  Obtiene el valor de un atributo.  ------------------------------------------------------------------------------------------------------------------------

let atributo = rangoEtario.getAttribute("type");
document.write("<br><br>" + atributo);



// removeAtributte()  -  Remueve un atributo.  ---------------------------------------------------------------------------------------------------------------------

rangoEtario.removeAttribute("type");
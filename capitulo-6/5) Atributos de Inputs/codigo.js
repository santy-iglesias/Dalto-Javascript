// Atributos de Inputs

const input = document.querySelector(".input-normal");
const inputFile = document.querySelector(".input-file");
const inputForm = document.querySelector(".form__input");


document.write("<br><br><br><br><br>" + "<b>Parte de Javascript:</b>" + "<br><br>"); 


// ".className"

document.write(input.className);     // Muestra el nombre de la clase.
document.write("<br><br>");



// ".value"

document.write(input.value);     // Muestra el valor del input.
document.write("<br><br>");



// ".type"

document.write(input.type);   // Puede modificar y/o mostrar el valor del atributo "type".

// document.write(input.type = "color");    Para modificar el valor de "type"

document.write("<br><br>");




// ".accept"       (Se utiliza con los inputs type="file")

inputFile.accept = "image/png";    // De esta forma solo acepta imagenes "png".
document.write("<br><br>");




// ".minlength"

inputForm.minLength = 5;




// ".placeholder"

inputForm.placeholder = "Escribi algo";




// ".required"

inputForm.required = " ";        // Se puede poner cualquier cosa entre comillas, como minimo un ESPACIO EN BLANCO para que funcione.
// Funciones

// ----------------------------------------------------------  Funciones flecha  -----------------------------------------------------------------------------------

const saludar = (nombre)=> {                               // En el caso de tener un solo parametro, se le pueden quitar los parentesis
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    alert(frase);
}


let nombre = prompt("Cual es tu nombre?");
saludar(nombre); 
/* B) Los datos de Cofla y otros alumnos fueron recibidos y ya están almacenados. Ahora hay que crear un sistema que muestre esa información y se
pueda asignar cuando rinde.


            - La interfaz debe ser agradable y atractiva
            - Debe contener todos los datos de manera estructurada
            - El profesor puede seleccionar en cual de las 2 semanas rinde el usuario
            - Si el profesor confirma, los datos se deben actualizar y reemplazar el espacio de selección de semana por la semana seleccionada   */

let alumnos = [{
    nombre: "Lucas Dalto",
    email: "soyDalto@gmail.com",
    materia: "Fisica 3",
}, {
    nombre: "Santiago Iglesias",
    email: "santi@gmail.com",
    materia: "Fisica 1",
}, {
    nombre: "Martin Gimenez",
    email: "martin@gmail.com",
    materia: "Calculo 2",
}, {
    nombre: "Julieta Gonzalez",
    email: "julieta@gmail.com",
    materia: "Literatura",
}, {
    nombre: "Cofla XD",
    email: "cofla@gmail.com",
    materia: "Recreo",
}];



const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

let htmlCode = "";


for(alumno in alumnos)
{
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];

    htmlCode += `
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;
}

contenedor.innerHTML = htmlCode;



boton.addEventListener("click" , (e)=>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");

    if(confirmar)
    {
        document.body.removeChild(boton);
        
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");

        for(elemento in elementos)
        {
            let semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
});
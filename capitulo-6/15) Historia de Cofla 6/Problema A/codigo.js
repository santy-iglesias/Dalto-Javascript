/* A) Cofla se quedó encerrado en su casa porque se le rompió la llave, pero necesita ir urgente a la facultad porque no puede faltar ni una sola
vez si quiere aprobar las materias que le faltan, ya que está al limite de asistencias, entonces tiene que llamar a un cerrajero y pedirle que 
traiga la llave indicada. No hay tiempo suficiente como para que el cerrajero vea cual es la llave indicada, solo puede traer una y probar,
entonces Cofla se da cuenta que es una llave antigua, por ende no hace falta afilarla, solo necesita decirle el modelo de llave pqra que el 
cerrajero venga, pero Cofla tiene tanta mala suerte que ni siquiera tiene internet para poder buscar, lo que si tiene es a un programador que le 
hará un sistema para mostrarle las llaves posibles y determinar cuál es la indicada. Hay solo 20 modelos posibles, permitir que Cofla seleccione el
indicado.


Crear un sistema que le muestre a Cofla las 20 llaves posibles, con sus 4 imágenes y Cofla debe seleccionar cuál llave elegir, una vez que Cofla
seleccionó, enviar los datos al servidor, otro programador se encargará del resto.

*/




const contenedor = document.querySelector(".flex-container");

// const boton = document.querySelector(".send-button");
// let valorAntiguo = boton.value;
// boton.value = valorAntiguo.toUpperCase();


function crearLlave(nombre , modelo , precio)
{
    img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;

    return [img,nombre,modelo,precio];
}

// const changeHidden = (number) => {
//     document.querySelector(".key-data").value = number;
// }



let fragmento = document.createDocumentFragment();

for(let i = 1 ; i <= 20 ; i++)
{
    let modeloRandom = Math.random() * 10000;
    modeloRandom = Math.round(modeloRandom);

    let precioRandom = Math.random() * 10 + 30;
    precioRandom = Math.round(precioRandom);

    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}` , precioRandom);


    // Creando un "div" en donde meter todos los datos:
    let div = document.createElement("div");

    div.addEventListener( "click" , () => {
        document.querySelector(".key-data").value = modeloRandom;
    } );

    div.tabIndex = i;
    div.classList.add(`flex-item` , `item-${i}`);

    // Ingresando los datos en el "div":
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3] + "<br><br><br>";

    // Ingresando el "div" en el fragmento:
    fragmento.appendChild(div);
}

contenedor.appendChild(fragmento);
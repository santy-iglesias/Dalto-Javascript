// Arrays asociativos

// Array asociativo:
let pc1 = {
    nombre: "SantiPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB",
};


// Array normal:
let pc2 = ["DaltoPC","Intel Core I7","16GB","1TB"];


// Para llamar a las distintas posiciones del "array asociativo":
alert(pc1["nombre"]);
alert(pc1["procesador"]);
alert(pc1["ram"]);
alert(pc1["espacio"]);


let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];


let frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
             el procesador es: <b>${procesador}</b> <br>
             la memoria ram es: <b>${ram}</b> <br>
             el espacio que tiene es de: <b>${espacio}</b>`;


document.write(frase);
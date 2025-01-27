// Datos Estructurados (JSON)


// Array asociativo (no JSON):
let objeto = {
    variable1: "Pedro",
    variable2: "Jorge",
};

console.log("Objeto no JSON:");
console.log(objeto);




// Array asociativo (JSON):
let objeto2 = {
    "variable1" : "Santiago",
    "variable2" : "Nacho",
};

console.log("Objeto JSON:");
console.log(objeto2);


/* Lo unico que cambian son las comillas (""). Se utlizan debido a que a la hora de pedir o enviar información a un servidor se pueden generar
errores si no se utilizan. */
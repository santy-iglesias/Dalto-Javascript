// Serialización y Deserialización


// JSON deserializado:
let objeto1 = {
    "variable1" : "Santiago",
    "variable2" : "Nacho",
};

console.log("JSON no serializado:");
console.log(objeto1);




// JSON serializado:
let objeto2 = '{"variable1":"Jorge" , "variable2":"Matias"}';

console.log("JSON serializado:");
console.log(objeto2);


// El "JSON serializado" es una cadena de texto con formato JSON.


// Al enviar la información se debe "serializar" debido a que ciertos programas no pueden trabajar con ciertos caracteres.


console.log(" ");
console.log(" ");







// JSON.stringify()  -  Método para "serializar" un objeto JSON.  ----------------------------------------------------------------------------------

console.log("Serializando una variable con 'JSON.stringify()':");

let serializado = JSON.stringify(objeto1);
console.log("Tipo de dato: " + typeof serializado);
console.log(serializado);

console.log(" ");
console.log(" ");




// JSON.parse()  -  Método para "deserializar" un objeto JSON.  ------------------------------------------------------------------------------------

console.log("Deserializando una variable con 'JSON.parse()':");

let deserializado = JSON.parse(objeto2);
console.log("Tipo de dato: " + typeof deserializado);
console.log(deserializado);



// Al enviar los datos, se deben enviar como "string". Al recibirlos, los recibimos como "string", por lo tanto, podemos cambiarlos a un "objeto".
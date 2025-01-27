// Libreria "Axios"


// Es un reemplazo más moderno que "fetch"

// "Axios" es el reemplazo de "fetch"


// Formas más recomendadas para trabajar con envío de datos a un servidor: "Axios" y "fetch"





// Para trabajar con el método "GET":

axios("info.txt")
    .then(res => console.log( res ));






// Para trabajar con el método "POST":       (Forma recomendable)

axios.post("https://reqres.in/api/users" , {
    "nombre" : "Santiago",
    "apellido" : "Iglesias",
})
    .then(res => console.log( res ));





// Otra forma de trabajar con el método "POST":

axios("https://reqres.in/api/users" , {
    method: "post",
    data: {"nombre":"santi"}
})
    .then(res => console.log(res));
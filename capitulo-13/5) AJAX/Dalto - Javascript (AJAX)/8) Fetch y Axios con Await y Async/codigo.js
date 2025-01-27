// Fetch y Axios con Await y Async

const getName = async ()=>{

    let resultado = await axios("informacion.txt");    
    
    let div = document.createElement("DIV");
    div.classList.add("nombre");
    div.innerHTML = resultado.data.nombre;
    document.body.appendChild(div);
    console.log(resultado);
}


const getAge = async ()=>{

    let resultado = await axios("informacion.txt");     
    
    let div = document.createElement("DIV");
    div.classList.add("edad");
    div.innerHTML = resultado.data.edad;
    document.body.appendChild(div);
    console.log(resultado);
}



document.getElementById("getName").addEventListener("click" , getName);
document.getElementById("getAge").addEventListener("click" , getAge);
// Mouse Events

const boton1 = document.querySelector(".button-1");
const boton2 = document.querySelector(".button-2");
const contenedor3 = document.querySelector(".contenedor-3");
const contenedor4 = document.querySelector(".contenedor-4");
const contenedor5 = document.querySelector(".contenedor-5");
const contenedor6 = document.querySelector(".contenedor-6");
const contenedor7 = document.querySelector(".contenedor-7");
const contenedor8 = document.querySelector(".contenedor-8");
const contenedor9 = document.querySelector(".contenedor-9");
const contenedor10 = document.querySelector(".contenedor-10");






// click  -  Ocurre con un click.  -----------------------------------------------------------------------------------------------------------------

boton1.addEventListener( "click" , (event)=> {
    alert("Di click en un boton.");
});



// dblclick  -  Ocurre con un doble click.   -------------------------------------------------------------------------------------------------------

boton2.addEventListener("dblclick" , (event)=> {
    alert("Di doble click en un boton.");
});



// mouseover  -  Ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.  ----------------------------------------------------

contenedor3.addEventListener("mouseover" , (event)=>{
    alert("Pase el mouse sobre un contenedor.");
});

// Observar que pasa al salir y entrar de los elementos hijos.




// mouseout  -  Ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios.  -------------------------------------------

contenedor4.addEventListener("mouseout" , (event)=>{
    alert("Sali de un contenedor.");
});

// Se ejecuta cada vez que salgo del "div". Incluso si entro al "h2" que tiene de hijo.




// contextmenu  -  Ocurre con un click en el boton derecho en un elemento para abrir un menú contextual.  ------------------------------------------

contenedor5.addEventListener("contextmenu" , (event)=>{
    alert("Di click derecho en un contenedor.");
});



// mousemove  -  Ocurre cuando el puntero se mueve mientras está sobre un elemento.  ---------------------------------------------------------------

contenedor6.addEventListener("mousemove" , (event)=>{
    alert("Moví el mouse sobre un elemento");
});

// Se ejecuta constantemente.



// mouseenter  -  Ocurre cuando el puntero se mueve sobre un elemento.  ----------------------------------------------------------------------------

// El "mouseenter" es muy parecido al "mouseover". Se utiliza principalmente para "Internet Explorer".

contenedor7.addEventListener("mouseenter" , (event)=>{
    alert("Moví el mouse sobre un elemento");
});





// mouseleave  -  Ocurre cuando el puntero se mueve fuera de un elemento.  -------------------------------------------------------------------------

contenedor8.addEventListener("mouseleave" , (event)=>{
    alert("Saqué el mouse de un contenedor.");
});




// mousedown  -  Ocurre cuando un usuario apreta cualquier botón del mouse sobre un elemento.  -----------------------------------------------------

contenedor9.addEventListener("mousedown" , (event)=>{
    alert("Apreté el click sobre un contenedor");
});



// mouseup  -  Ocurre cuando un usuario suelta el botón del mouse sobre un elemento.  --------------------------------------------------------------

contenedor10.addEventListener("mouseup" , (event)=>{
    alert("Solté el botón del mouse dentro de un contenedor.");
});
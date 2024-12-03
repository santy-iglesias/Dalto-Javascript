// Screen y Scroll

// screen  -  Devuelve una referencia al objeto de pantalla asociado con la ventana.  --------------------------------------------------------------

const screen = window.screen;
console.log(screen);
document.write(screen);

// Mostrando una propiedad de screen:
document.write(screen.availHeight + "<br><br>");




// screenLeft  -  Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.  --------------------
// screenTop  -  Devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla.  -------------------------
const screenLeft = window.screenLeft;
const screenTop = window.screenTop;

document.write(`Left: <b>${screenLeft}</b><br>
                Top: <b>${screenTop}</b><br>`);

// Mover la ventana para ver como cambian los valores.





// scrollX  -  Devuelve el número de pixeles que el documento se desplaza actualmente horizontalmente.  --------------------------------------------
const scrollX = window.scrollX;
alert(`ScrollX: ` + scrollX);

// scrollY  -  Devuelve el número de pixeles que el documento se desplaza actualmente verticalmente.  ----------------------------------------------
const scrollY = window.scrollY;
alert(`ScrollY: ` + scrollY);






// scroll()  -  Desplaza la ventanaa un lugar particular en el documento. (con options y con posiciones)  ------------------------------------------

// window.scroll(posicion en X  ,  posicion en Y)    Posiciones en pixeles





// resizeBy()  -  Cambia el tamaño de la ventana actual en una cantidad específica.  ---------------------------------------------------------------

// let ventana = window.open("https://youtube.com");
// ventana.resizeBy(100 , 200);





// resizeTo()  -  Redimensiona dinámicamente la ventana.  ------------------------------------------------------------------------------------------

// let ventana = window.open("https://youtube.com");
// ventana.resizeTo(100 , 200);




// moveBy()  -  Mueve la ventana en una ubicación relativa.  ---------------------------------------------------------------------------------------

// let ventana = window.open("https://youtube.com");
// ventana.resizeTo(100 , 200);




// moveTo()  -  Mueve la ventana en una ubicación absoluta.  ---------------------------------------------------------------------------------------

// let ventana = window.open("https://youtube.com");
// ventana.moveTo(100 , 200);



// Los métodos "resizeBy()", "resizeTo()", "moveBy()" y "moveTo()" funcionan únicamente si se utilizan desde un servidor, desde el navegador tira un error. Se usan muy poco igualmente.




/* Objetos barprop: 
                
            - locationbar
            - menubar 
            - personalbar
            - scrollbars
            - statusbar
            - toolbar


Se puede saber si son visibles o no de la siguiente forma:  "locationbar.visile"  y devuelve TRUE o FALSE.

*/
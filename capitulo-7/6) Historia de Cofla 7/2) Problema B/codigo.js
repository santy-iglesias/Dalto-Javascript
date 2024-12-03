/* 2) Cofla llega a su casa, abre una página y aprieta F11, desde ahí se pone a navegar pero hay un problema... Como ahora está en pantalla
completa no puede ver ni la barra de marcadores, ni el protocolo, ni la URL, ni ninguna información que nos pueda otorgar la interfaz que contiene 
la barra de búsqueda.


            - Crear un sistema que muestre los suficientes datos como para conocer el sitio web.                       */

let href = window.location.href;
let pathName = window.location.pathname;
let hostName = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>
            Hostname: <b>${hostName}</b><br>
            Pathname: <b>${pathName}</b><br>
            URL Completa: <b>${href}</b><br>`;


document.write(html);
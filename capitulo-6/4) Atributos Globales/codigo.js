// Atributos Globales

// "contentEditable"  -  Indica si el elemento puede ser modificable por el usuario.  (Solo acepta valores booleanos)

// "dir"  -  Indica la direccionalidad del texto.

// "hidden"  -  Indica si el elemento aún no es, o ya no es, relevante.

// "style"  -  Contiene declaraciones de estilo CSS para ser aplicadas al elemento.

// "tabindex"  -  Indica si el elemento puede obtener un focus de input.

// "title"  -  Contiene un texto con información relacionada al elemento que pertenece.




const titulo = document.querySelector(".titulo");
const ejemploTitle = document.querySelector(".ejemplo-title");



titulo.setAttribute("contentEditable" , "true");

titulo.setAttribute("dir" , "rtl");        // Se recomienda hacer esto desde CSS con las porpiedades correspondientes.

// titulo.setAttribute("hidden" , "");

// titulo.setAttribute("tabindex" , "4");

ejemploTitle.setAttribute("title" , "jajjajja xd");
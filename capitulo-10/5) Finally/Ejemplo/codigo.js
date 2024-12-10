// Finally - Ejemplo

// Se ejecuta sin importar lo que pase


const pruebaTry = ()=> {
    try {
        return 1;
    }
    catch(e) {
        return 2;
    }
    finally {
        return 3;
    }
}


console.log("pruebaTry = " + pruebaTry);
console.log("pruebaTry = " + pruebaTry());
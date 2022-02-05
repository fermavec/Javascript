/*Manejo de Errores */
//Try, Catch y Finally
try {
    console.log("Soy Try, Yo soy el codigo a evaluar");
} catch (error) {
    console.log("Yo atrapo los errores que surjan");
} finally {
    console.log("Soy Finally, Yo estoy por si quieres ejecutar otro bloque al final");
}

console.log("*******************");

try {
    noExiste;
} catch (error) {
    console.log("Soy Catch, Yo atrapo los errores que surjan");
    console.log(error);
} finally {
    console.log("Soy Finally, Yo estoy por si quieres ejecutar otro bloque al final");
}

//Errores personalizados
console.log("*******************");
try {
    let numero = "Cinco";
    if (isNaN(numero)) {
        throw new Error("Na,na,na, te quisiste ver muy vivo, ese caracter no es un numero");
    }
    console.log(numero);
} catch (error) {
    console.log(`Se produjo el siguiente error ${error}`);
}
//Objeto Consola
console.log("*************");
console.log("Console Object");

console.log(console);
console.error("Puedo mandar mensajes de error a la consola con console.error");
console.warn("Tambien puedo mandar avisos con console.warn");
console.info("Yo doy información desde console.info");

var nombre = "Fernando",
    apellido = "Chavez",
    edad = 34;

console.log("Puedes mandarme en una sola linea: ");
console.log(nombre, apellido, edad);
console.log("Puedes imprimir variable como %s o %s, incluso %d con comodines", nombre, apellido, edad);

console.log(window);
console.log(document);
console.dir(window);
console.dir(document);

console.group("Puedo agrupar consoles");
console.log("grupo 1");
console.log("grupo 2");
console.log("grupo 3");
console.log("grupo 4");
console.groupEnd();

console.log(console);
console.table(Object.entries(console).sort());

console.time("Tiempo");
var arreglo = new Array(100000);
for (i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}
console.timeEnd("Tiempo");

for (i = 0; i <= 10; i++) {
    console.count("Ejecucion: ");
    console.log(i);
}

let x = 2;
let y = 1;
let asegurar = "Se espera que x sea menor que y";
console.assert(x < y, (x, y, asegurar));

console.clear();
console.log("Arriba de mi hay un console.clear que limpio la consola; si quieres aprender todos los metodos de consola, los puedes encontrar arriba del clear");

//Date Object
console.log("*************");
console.log("Date Object");

console.log(Date());

var fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(Date.now()); //Desde el 1 enero de 1970 cuantos segundos

let cumpleFer = new Date(1987, 6, 15, 1, 15);
console.log(cumpleFer);
console.clear();
console.log("Hay un console clear sobre mi con toda la info del objeto Date");

//Math Object
console.log("*************");
console.log("Math Object");
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-125));
console.log(Math.ceil(7.8));
console.log(Math.floor(7.8));
console.log(Math.round(7.5));
console.log(Math.round(7.49));
console.log(Math.sqrt(81));
console.log(Math.pow(7, 2));
console.log(Math.random());
console.log(Math.roundrandom() * 1000);
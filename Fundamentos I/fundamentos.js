//Variables
//Son segmentos de memoria en donde guardamos 
//nuestros datos o información
var hola = "Hola Mundo"
console.log(hola);

//Scope
//Es el ambito de accion de una variable y en JS puede ser de
//3 tipos: Global, funcional(Funcion) y Bloque
//Desde ECMAScript 6. antes, pasaba el Hoisting porque no había
//ambito de bloque (Scope de bloque o local).

//con var será global
console.log('**********************');
var global = "Soy variable del Scope global y soy una mala practica";
console.log(global);
console.log('me almaceno en el objeto window y puedes buscarme aquí:')
console.log(window);
//con let será de bloque
console.log('**********************');
let bloque = "Soy variable de Scope de bloque";
console.log(bloque);

//Uso de Var
console.log('**********************');
var soyMala = "Soy global y me voy a hoistear";
console.log('estoy antes del bloque');
console.log(soyMala); {
    console.log('estoy dentro del bloque');
    var soyMala = "Te dije que me iba a hoistear";
    console.log(soyMala);
}
console.log('estoy despues del bloque');
console.log(soyMala);

//Uso de Let
console.log('**********************');
let soyBuena = "Soy de bloque y te voy a respetar";
console.log('estoy antes del bloque');
console.log(soyBuena); {
    console.log('estoy dentro del bloque');
    let soyBuena = "Te dije que te iba a respetar";
    console.log(soyBuena);
}
console.log('estoy despues del bloque');
console.log(soyBuena);

//Variables que no cambiarán su valor CONST
console.log('**********************');
const PI = 3.1416;
console.log('Soy una constante y no me puedes declarar vacia y no puedes cambiar mi valor a menos de que sea un objeto o un arreglo');
console.log(PI);

//Strings - Cadenas de Texto
console.log('**********************');
let nombre = 'Fernando'; //Comillas sencillas
let apellido = "Chavez"; //Comillas dobles
let declaracionConstructor = new String('Estoy declarada por un constructor');
console.log(`${nombre} ${apellido} ${declaracionConstructor}`);

//Propiedades de Strings
//Caracteristicas o atributos
console.log(`${nombre.length} soy una propiedad del string "nombre"`);

//Metodos de Strings
//Acciones o funciones
console.log(`${nombre.toUpperCase()} soy un metodo del string "nombre"`);

//Concatenacion
let concatenado = "Yo soy una concatenación " + nombre + " " + apellido;
console.log(concatenado);

//Interpolación de Variables
//Template Strings
let templateString = `Yo soy una interpolación de variables con TS ${nombre} ${apellido}`;
console.log(templateString);

//Numeros
console.log('**********************');
let numeroInt = 200
let numeroFloat = 20.25
console.log(`${numeroInt} ${numeroFloat} Somos numeros`);

//Boolean
console.log('**********************');
let verdadero = true;
let falso = false;
console.log(`somos booleanos ${verdadero} ${false}`);

//Null, Undefined and NaN
console.log('**********************');
let indefinido;
console.log(`No me han asignado valor ${indefinido}`);
let nulo = null;
console.log(`Me asignaron null como valor ${nulo}`);
let noSoyNumero = "37" + 325;
console.log(`Yo no soy un numero pero si un tipo de dato primitivo ${noSoyNumero}`);

/*Valores de tipo compuesto o valores complejos*/
//Funciones
//Bloques de codigo autocontenido e independientes del ambito global(Scope Global)
//Son ciudadanas de primer clase en JS
//Funcion Declarada
function funcionDeclarada() {
    console.log('**********************');
    console.log("Soy una funcion declarada");
}
//Invocación de funcion
funcionDeclarada();

//funcion que devuelve valor
function devuelvoValor() {
    console.log('**********************');
    console.log("Tengo guardado un valor, si me guardas en variable y me imprimes, me verás aquí abajo");
    return "Yo soy el valor secreto";
    console.log("Escondo otro valor aqui");
    return "Yo ya no me voy a ejecutar porque hay un return antes";
}
//Asignar variable e invocar
let functionValue = devuelvoValor();
console.log(functionValue);

//Parametros y Argumentos
function parametrosArgumentos(argumento, parametro = "Soy un parametro") {
    console.log('**********************');
    console.log(argumento);
}

parametrosArgumentos("soy un argumento", );

//Funciones como expresiones
//Lleva una funcion anonima y usamos arrow function
let funcionExpresada = () => {
    console.log('**********************');
    console.log('Soy una función Expresada y no me puedes inicializar antes de haberme declarado');
}

funcionExpresada();

//Arreglos
let arregloVacio = [];
let arregloDefinido = ["a", 2, true];
console.log('**********************');
console.log("Yo soy un arreglo vacio");
console.log(arregloVacio);
console.log("Yo soy un arreglo definido");
console.log(arregloDefinido);
console.log("Yo soy el elemento 0 del arreglo definido");
console.log(arregloDefinido[0]);

let otraFormaDeArreglo = Array.of(1, 2, 3, 4, 5);
console.log("Yo soy otra forma de definir un arreglo");
console.log(otraFormaDeArreglo);

let arregloNuevo = new Array(1, 2, 3, 4, 5);
console.log('Yo soy una forma en desuso de crear arreglos');
console.log(arregloNuevo);

//Metodos de los arreglos
let colores = ["red", "green", "blue"];
console.log("Metodos de arreglos");
console.log(colores);
colores.push("black");
console.log("Yo soy el metodo .push que agrega un elemento a un arreglo");
console.log(colores);
colores.pop();
console.log("Yo soy el metodo .pop que elimina el ultimo elemento de un arreglo");
console.log(colores);
console.log("Yo ejecuto una funcion por cada elemento de tu arreglo");
colores.forEach(function(color, index) {
    console.log(`Soy el color ${color} en la posición ${index} de tu arreglo`);
});

//Objetos
let objetoVacio = {};
console.log('**********************');
console.log("Yo soy un objeto vacio");
console.log(objetoVacio);
let objetoObject = new Object();
console.log("Yo soy un objeto creado con el prototipo Object pero estoy en desuso");
console.log(objetoObject);
let objetoDefinido = {
    nombre: "Fernando",
    apellido: "Chavez",
    edad: 34,
    diabetico: true,
    intereses: ["Javascript", "python", "Machine Learning"],
    redes: {
        facebook: "Fer Mavec",
        instagram: "Fer Mavec",
        youtube: "Fer Mavec",
    },
    saludar: function() {
        console.log("Estoy dentro de un objeto y accediste a mi como metodo del objeto declarado")
    },
    hacerThis: function() {
        console.log(`Yo uso this como referencia al contexto en que me encuentro ${this.nombre} ${this.apellido}`)
    }
}
console.log("Soy un objeto definido");
console.log(objetoDefinido);
console.log("Soy un atributo del objeto definido");
console.log(objetoDefinido.nombre);
console.log(objetoDefinido.intereses[1]);
console.log(objetoDefinido.redes.instagram);
console.log("Soy un metodo del objeto definido");
objetoDefinido.saludar();
console.log("Soy una referencia de contexto This");
objetoDefinido.hacerThis();
//Operador de Corto Circuito
console.log("*************");
console.log("Operador de Corto Circuito");

function saludar(nombre) {
    nombre = nombre || "desconocido"; //Operador corto circuito OR
    console.log(`Hola ${nombre}`);
}
saludar("Fernando");
saludar();

console.log(8 && undefined); //Operador de corto circuito AND

//Operador de Corto Circuito
console.log("*************");
console.log("Alert, Confirm y Prompt");

//Cuelgan del window pero no es necesario ponerlo
//window.alert("Soy una alerta");
//window.confirm("Soy una confirmación");
//window.prompt("Soy un prompt y te permito ingresar información");
//let alerta = confirm("Soy una alerta");
//let confirmación = confirm("Soy una confirmación");
//let aviso = prompt("Soy un prompt y te permito ingresar información");

//console.log(alerta, confirmación, aviso);
console.log("Arriba de mi hay codigo comentado porque lanzaba alertas incomodas para continuar");

//Expresiones Regulares
console.log("*************");
console.log("Expresiones Regulares");

let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ratione excepturi vel exercitationem consequuntur cumque amet repellat? Numquam nostrum asperiores cumque, impedit odit quo quos aliquam eius dolor veritatis vel!";

//1er forma para definir una expresion regular
//la flag i ignora si es mayuscula o minuscula
//la flag g toma todas las coincidencias y no solo la primera
var expresionRegular = new RegExp("lorem", "ig");

var rfc = "CACF";
//2da forma para definir una exoresion regular
var expresionRegular2 = /[a-z]/id;

console.log(expresionRegular.test(lorem));
console.log(expresionRegular.exec(lorem));
console.log(expresionRegular2.test(rfc));
console.log(expresionRegular2.exec(rfc));

//Funciones Autoejecutables
console.log("*************");
console.log("Funciones Autoejecutables IIFE");

(function() {
    console.log("Hola, yo soy una IIFE");
})();

(function(d, w, c) {
    console.log("Y me dicen de cariño Ifi");
    console.log(d);
    console.log(w);
    console.log(c);
    c.log("Hey!, ahora soy un console log con mi inicial");
})(document, window, console);

//Formato de IIFE Douglas Crockford
((function() {
    console.log("Soy formato Douglas Crockford");
})());

//Unaria
+

function() {
    console.log("Soy formato Unaria");
}();

//Version Facebook
! function() {
    console.log("Soy formato Facebook");
}();
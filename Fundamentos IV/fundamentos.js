//Parametro REST y operador Spread
//Parametro REST
function suma(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function(n) {
        resultado += n;
    });

    return resultado;
}

console.log(`Yo soy el resultado de una funcion con parametro REST
${suma(2,5)}
${suma(2,5,3)}
${suma(2,3,4,5)}`);

//Spread Operator o Operador de Propagacion
console.log("******************");
let arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0];
console.log(arr1, arr2);

let arr3 = [...arr1, ...arr2];
console.log(`Yo soy un arreglo creado con SPREAD Operator:
${arr3}`)

//Arrow Function
console.log("******************");
const naf = function() {
    console.log("No estoy creada con Arrow Function");
}
naf();

const iafoneline = () => console.log("Yo si soy una Arrow Function");
iafoneline();
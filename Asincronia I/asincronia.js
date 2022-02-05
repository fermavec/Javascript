//Temporizadores
console.log("*****************");
console.log("Soy un setTimeout");
var timeOut = setTimeout(() => {
    console.log("Me tardé en aparecer el tiempo en milisegundos que definiste")
}, 3000);

clearTimeout(timeOut);

var setInterval1 = setInterval(() => {
    console.log("Soy un setInterval");
    console.log("Me ejecuto cada que pasa el tiempo en milisegundos que definiste")
}, 3000);

var setInterval2 = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 3000);

//Cancala el intervalo y funciona con timeout tambien
clearInterval(setInterval1);
clearInterval(setInterval2);

//Callbacks
console.log("*****************");

function callbackCuadrado(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);
}

console.log("Hay un Callback comentado aqui");
// callbackCuadrado(2, (value, result) => {
//     console.log("Inicia Callback");
//     console.log(`Callback valor: ${value}, resultado: ${result}`);
//     callbackCuadrado(4, (value, result) => {
//         console.log(`Callback valor: ${value}, resultado: ${result}`);
//     });
//     callbackCuadrado(8, (value, result) => {
//         console.log(`Callback valor: ${value}, resultado: ${result}`);
//     });
//     callbackCuadrado(16, (value, result) => {
//         console.log(`Callback valor: ${value}, resultado: ${result}`);
//         console.log("Ahora ya soy un Callback hell con tanto Callback")
//     });
// });

//Promises
console.log("*****************");
console.log("Aqui hay una Promesa comentada");

// function cuadradoPromise(value) {
//     if (typeof value !== "number") return Promise.reject("El valor ingresado no es un numero");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 value: value,
//                 result: value * value,
//             });
//         });
//     });
// }

// cuadradoPromise(2)
//     .then((obj) => {
//         console.log("Inicia Promesa");
//         console.log(obj);
//         return cuadradoPromise(4)
//     })
//     .then((obj) => {
//         console.log(obj);
//         return cuadradoPromise(8)
//     })
//     .then((obj) => {
//         console.log(obj);
//         return cuadradoPromise("16")
//     })
//     .then((obj) => {
//         console.log(obj);
//         console.log("Termina Promesa");
//     })
//     .catch((err) => console.error(err));

//Async/Await
console.log("*****************");

function asyncAwait(value) {
    if (typeof value !== "number") return Promise.reject("El valor ingresado no es un numero");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value: value,
                result: value * value,
            });
        });
    });
}


async function asincronaDeclarada() {
    try {
        console.log("Inicia Asincronismo");
        let obj = await asyncAwait(0);
        console.log(`${obj.value} - ${obj.result}`);

        obj = await asyncAwait(2);
        console.log(`${obj.value} - ${obj.result}`);

        obj = await asyncAwait(4);
        console.log(`${obj.value} - ${obj.result}`);

        obj = await asyncAwait(8);
        console.log(`${obj.value} - ${obj.result}`);

        obj = await asyncAwait("16");
        console.log(`${obj.value} - ${obj.result}`);

        console.log("Fin del Async/Await");
    } catch (err) {
        console.error(err);
    }
}

asincronaDeclarada();

const asincronaExpresada = async() => {
    try {
        console.log("Inicia Asincronismo");
        let obj = await asyncAwait(16);
        console.log(`${obj.value} - ${obj.result}`);

        obj = await asyncAwait(32);
        console.log(`${obj.value} - ${obj.result}`);

        obj = await asyncAwait(64);
        console.log(`${obj.value} - ${obj.result}`);

        obj = await asyncAwait(128);
        console.log(`${obj.value} - ${obj.result}`);

        obj = await asyncAwait("256");
        console.log(`${obj.value} - ${obj.result}`);

        console.log("Fin del Async/Await");
    } catch (err) {
        console.error(err);
    }
}

asincronaExpresada();
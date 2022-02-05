//Break and Continue
let digitos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < digitos.length; i++) {
    if (i === 5) {
        console.log("¡Oh Dios Mio!, despues del 5 hay un break");
        break;
    }
    console.log(digitos[i]);
}
console.log("*******************");
for (let i = 0; i < digitos.length; i++) {
    if (i === 5) {
        console.log("No me gusta el numero 6, me lo voy a brincar con un continue");
        continue;
    }
    console.log(digitos[i]);
}

//Destructuracion
console.log("*******************");
let destructuracion = [1, 2, 3];
//Sin destructuracion
console.log("Yo no soy con destructuracion");
let uno = destructuracion[0],
    dos = destructuracion[1],
    tres = destructuracion[2];
console.log(uno, dos, tres);

//Con Destructuracion
console.log("*******************");
console.log("Yo si soy con destructuracion de arreglo");
let [one, two, three] = destructuracion;
console.log(one, two, three);

//Destructuracion de Objeto
console.log("*******************");
console.log("Yo si soy con destructuracion de objeto");
const destructuracionObjeto = {
    nombre: "Fernando",
    apellido: "Chavez",
    edad: 34
}
let { nombre, apellido, edad } = destructuracionObjeto;
console.log(nombre, apellido, edad);

//Object Literal
console.log("*******************");
let nombrePerro = "Benji";
let colorPerro = "Miel";

const perro = {
    nombrePerro: nombrePerro,
    colorPerro: colorPerro,
    ladrar: function() {
        console.log(`Hola, soy ${this.nombrePerro} pero fui creado antes de ECMAScript6`)
    }
}

perro.ladrar();

const dog = {
    nombrePerro,
    colorPerro,
    ladrar() {
        console.log(`Yo tambien soy ${this.nombrePerro} pero estoy creado con Object Literal`)
    }
}
dog.ladrar();
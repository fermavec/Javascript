//Contar caracteres
console.log("************");

const contarCaracteres = (cadena) =>
    (cadena.length = 0) ?
    console.warn("Bro, ingresa al menos un caracter") :
    console.info(`La cadena de texto "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres("Holaaaaaaa Enfermera");

//Slicing String
console.log("************");
const sliceString = (textString, cut) =>
    (!textString) ?
    console.warn("Bro, ingresa al menos un caracter") :
    console.log(textString.slice(3, cut));

sliceString("Tu reputacion", 9);
//sliceString();

//Separador de Espacios en blanco
console.log("************");
const splitString = (textToSplit, spliter) =>
    (!textToSplit) ?
    console.warn("Bro, ingresa al menos un caracter") :
    console.log(textToSplit.split(spliter));

splitString("Cada espacio en blanco separa mi texto y agrega la palabra a un arreglo", " ");

//Repetir String
console.log("************");
const repeatString = (textToRepeat, times) =>
    (!textToRepeat) ?
    console.warn("No ingresaste una cadena de texto") :
    console.log(textToRepeat.repeat(times));

repeatString("Hola Fer ", 5);

//Reverse String
console.log("************");
const reversa = (reverseString = "") =>
    (!reverseString) ?
    console.log("No ingresaste una cadena") :
    console.log(reverseString.split("").reverse().join(""));

reversa("AnitalavalaTina");

//Repeticion de palabras en String
console.log("************");
var repeatedWord = (originalText = "", word = "") => {
    if (!originalText) return console.log("No ingresaste el texto");
    if (!word) return console.log("No ingresaste la palabra a buscar");

    let iterador = 0;
    let contador = 0;
    while (iterador !== -1) {
        iterador = originalText.indexOf(word, iterador);
        if (iterador !== -1) {
            iterador++;
            contador++;
        }
    }
    return console.log(`La palabra ${word} se repite ${contador} veces`);
}
repeatedWord("mundo, infeliz mundo, todos somos parte de este mundo y todos sufrimos el mundo", "mundo");
repeatedWord();
repeatedWord("Hola Hola");

//Palindromo
console.log("************");
var palindrome = (testWorF = "") => {
    if (!testWorF) return console.log("Qué quieres decir?");

    testWorF = testWorF.toLowerCase();
    testWorF = testWorF.split(" ").join("");
    let reverseWorF = testWorF.split("").reverse().join("");

    return (testWorF === reverseWorF) ?
        console.log(`${testWorF} es igual a ${reverseWorF}`) :
        console.log(`En qué mundo ${testWorF} sería igual a ${reverseWorF}`);
}

palindrome("saLas");
palindrome();
palindrome("americano");
palindrome("anita lava la tina");

//Ejercicio con Expresiones Regulares
console.log("************");
let suprimCharacter = (userText = "", patternToSuprim = "") =>
    (!userText) ?
    console.log("Ingresa una cadena de texto") :
    (!patternToSuprim) ?
    console.log("No ingresaste el patron a eliminar") :
    console.log(userText.replace(new RegExp(patternToSuprim, "ig"), ""));

suprimCharacter("azt1, azt2, azt3", "azt");
suprimCharacter();
suprimCharacter("azt1, azt2, azt3");

//Nimero Aleatorio
console.log("************");
let randomIt = (max = 0, min = 0) => {
    if (!max) return console.log("Ingresa un maximo");
    if (!min) return console.log("Ingresa un minimo");

    let numberRandom = Math.random() * (max - min) + min;
    console.log(parseInt(numberRandom));
}
randomIt(600, 501);
randomIt(600);
randomIt();

//Capicua
console.log("************");
let capicua = (n = 0) => {
    if (!n) {
        console.log("Ingresa un numero");
    }
    n = n.toString();
    let nReverse = n.split("").reverse().join("");
    if (n === nReverse) {
        return true;
    } else {
        return console.log("No es capicua, intenta con otro");
    }
}

console.log(capicua(2002));
capicua(801);
capicua();

//Factorial
console.log("************");
let factorial = (numero = 0) => {
    let contador = 1;
    let resultado = 0;
    for (let i = 1; i <= numero; i++) {
        resultado = contador * i;
        contador = resultado;
    }
    return console.log(resultado);
}

factorial(5);

//Primalidad
console.log("************");
const primo = (nP) => {
    if (!nP) return console.log("Ingresa un numero");
    if (nP <= 1) return console.log("No es primo o, incluso, es negativo");
    if (nP === 2 || nP === 3) return console.log("Es primo");
    if (nP % 2 === 1 && nP % 3 === 1) {
        console.log("Es primo");
    } else {
        console.log("No es primo");
    }
}
primo(7);
primo(2);
primo(1);
primo(4);
primo();

//Paridad
console.log("************");
const paridad = (numero) => {
    if (!numero) return console.log("Ingresa un numero");
    if (numero < 2) return console.log("Ingresa un numero mayor que 1");
    if (numero % 2 === 0) {
        console.log("Tu numero es par");
    } else {
        console.log("Tu numero es impar");
    }
}
paridad(3841);
paridad(2);
paridad(3);
paridad(1);
paridad();

//Grados C-F y F-C
console.log("************");
const convertidorGrados = (origen, grados) => {
    if (!origen) return console.log("Ingresa la información completa");
    if (origen === "F") {
        let farenheit = (grados * (9 / 5)) + 32;
        console.log(`${grados} grados Celsius son ${farenheit} grados Farenheit`);
    }
    if (origen === "C") {
        let celsius = (grados - 32) * (5 / 9);
        console.log(`${grados} grados Farenheit son ${celsius} grados Celsius`);
    }
}
convertidorGrados("C", 32);
convertidorGrados("F", 0);
convertidorGrados();

//Binario
console.log("************");
let binaryCalc = (num, type) => {
    if (type === "dec") {
        let binario = []
        for (i = 0; i < 8; i++) {
            let residuo = num % 2;
            binario.push(residuo);
            num = Math.floor(num / 2);
        }
        binario = binario.reverse().join("");
        console.log(binario);
    }
    if (type === "bin") {
        let digit = parseInt(num, 2);
        console.log(digit);
    }
}
binaryCalc(196, "dec");
binaryCalc(11000100, "bin");

//Descuento
console.log("************");
const finalPayment = (precio, descuento) => {
    let pago = parseFloat(precio * ((100 - descuento) / 100)).toFixed(2);
    console.log(pago);
}
finalPayment(1000, 22.85);

//Calculo de Años
console.log("************");
const edad = (year, month, day) => {
    let today = new Date().valueOf();
    let born = new Date(year, month, day).valueOf();

    let miliseconds = today - born;
    let seconds = miliseconds / 1000
    let hours = seconds / 3600;
    let months = hours / 730;
    let years = Math.round(months / 12);
    console.log(`Tienes ${years} años`);
}
edad(1987, 7, 15);
edad(1961, 8, 7);


//Conteo de vocales
console.log("************");
const matchVowels = (chr) => {

    let vowels = chr.match(/[aeiou]/gi).length;
    let consonants = chr.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length;

    console.log(`${chr} tiene ${vowels} vocales y ${consonants} consonantes`);
}
matchVowels("Fernando Chavez Caracas");

//Validar Datos
console.log("************");
const validarDatos = (nombre, correo) => {
    let expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let expRegCorreo = /^\w+@(\w+\.)+\w{2,4}$/;

    if (!nombre) {
        console.log("Ingresa tu nombre");
        return false;
    }
    if (!expRegNombre.exec(nombre)) {
        console.log("El campo nombre admite sólo letras y espacios ");
        return false;
    }
    if (!correo) {
        console.log("Ingresa tu correo electronico");
        return false;
    }
    if (!expRegCorreo.exec(correo)) {
        console.log("Debe ser un correo valido");
        return false;
    }
    console.log("Tus datos son validos");
    return true;
}

validarDatos("Fernando", "fermavec@gmail.com");
validarDatos(555284525, "fermavec@gmail.com");
validarDatos("Fernando", "fermavecgmail.com");

//Recorrer Array y exponer
console.log("************");
const exponencial = (a = 0, b = 0, c = 0, d = 0, e = 0) => {
    const anotherArray = [a, b, c, d, e];
    let potencias = [];
    anotherArray.forEach(element => {
        element = element * element;
        potencias.push(element);
    });
    console.log(potencias);
}
exponencial(2, 4, 8, 16);

//Mayor y menor de un arreglo
console.log("************");
const filtrado = (a, b, c, d, e) => {
    const newArray = [a, b, c, d, e];
    newArray.sort(function(a1, b1) {
        return a1 - b1;
    });
    let high = newArray[newArray.length - 1];
    let low = newArray[0];
    console.log(newArray);
    console.log(low);
    console.log(high);
}

filtrado(10, 11, 3, 58, -4);

//Objeto Creado a partir de dos arreglos
console.log("************");
const separadorDeParidad = (originalArray) => {
    const pares = [];
    const impares = [];
    const objetoNumeros = {
        pares: pares,
        impares: impares
    };
    originalArray.forEach(element => {
        if (element % 2 === 0) {
            pares.push(element);
        } else {
            impares.push(element);
        }
    });
    console.log(pares);
    console.log(impares);
    console.log(objetoNumeros);
}
separadorDeParidad([2, 45, 1, 3, 48, 8, 6, 4, 7, 9, 10, 25, 37, 108, 3458]);

//Ordenamiento Numerico
console.log("************");
const a2D = (arrayA2D) => {
    const numeros2Asc = arrayA2D;
    const numeros2Des = arrayA2D;
    let numerosOrdenados = numeros2Asc.sort(function(a, b) {
        return a - b;
    })
    let numerosDescendentes = numeros2Des.sort(function(a, b) {
        return b - a;
    })
    const aToD = {
        ascendente: numerosOrdenados,
        descemdemte: numerosDescendentes
    };
    console.log(numerosOrdenados);
    console.log(numerosDescendentes);
    console.log(aToD);
}
a2D([0, 8, 6, 4, 5, 7, 2, 9, 3, 1]);

//Repeticion de elementos en arreglo
console.log("************");
const repeticionElementoArray = (elementos) => {
    let a = elementos;
    for (let i = a.length - 1; i >= 0; i--) {
        if (a.indexOf(a[i]) !== i) {
            a.splice(i, 1);
        };
    }
    console.log(a);
}
repeticionElementoArray([5, 1, 5, 2, 8, 3, 8]);

//Promedio de Elementos dentro de un Arreglo
console.log("************");
const calcPromedio = (valores) => {
    const promediar = valores;
    let sumPromedio = 0;
    for (i = 0; i < promediar.length; i++) {
        sumPromedio = sumPromedio + promediar[i];
    }
    let promedio = parseFloat(sumPromedio / promediar.length).toFixed(2);
    console.log(promedio);
}
calcPromedio([10, 5, 10, 5, 10, 10]);
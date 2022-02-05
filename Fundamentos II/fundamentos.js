/*Operadores Basicos*/
//Aritmeticos
let suma = 5 + 5;
let resta = 5 - 5;
let division = 5 / 5;
let multiplicacion = 5 * 5;
let modulo = 5 % 2;

console.log(suma);
console.log(resta);
console.log(division);
console.log(multiplicacion);
console.log(`regreso el residuo de una multiplicacion ${modulo}`);

//Relacionales
console.log("*************");
console.log("Somos operadores relacionales, revisa el codigo para dudas");
console.log(5 > 9);
console.log(5 < 9);
console.log(5 >= 9);
console.log(5 <= 9);
console.log(5 == 9);
console.log(5 === "5");

//Incremento o decremento
console.log("*************");
console.log("Somos operadores incrementales, revisa el codigo para dudas");
let i = 1;
console.log(i);
i += 2;
console.log(i);
i -= 2;
console.log(i);
i /= 2;
console.log(i);
i *= 2;
console.log(i);
//operador unario
i++;
console.log(i);
i--;
console.log(i);

//Logicos
console.log("*************");
console.log("Somos operadores logicos, revisa el codigo para dudas");
console.log(!true);
console.log(5 > 3 && 5 > 10);
console.log(5 > 10 || 5 > 2);

/*Estructuras de control*/
//Condicionales
let condicion = true;
console.log("*************");
if (condicion) {
    console.log("Soy una variable que cumple la condicion del if");
} else {
    console.log("Soy una variable que cumple la condicion del else");
}

let condicion2 = false;
if (condicion2) {
    console.log("Soy una variable que cumple la condicion del if");
} else {
    console.log("Soy una variable que cumple la condicion del else");
}

//if - else if - else
console.log("*************");
let condicion3 = 2;
if (condicion3 > 3) {
    console.log("Soy una variable que cumple la condicion del if");
} else if (condicion3 === 2) {
    console.log("Soy una variable que cumple la condicion del else if");
} else {
    console.log("Yo no aplico");
}

//Operador Ternario
console.log("*************");
let condicion4 = 4;
let operadorTernario = (condicion4 == 4) ? "Soy verdad" : "No soy verdad";
console.log(operadorTernario);

//SwitchCase
console.log("*************");
let caso = 5;
switch (caso) {
    case 1:
        console.log("me elegiste, soy el 1");
        break;
    case 2:
        console.log("me elegiste, soy el ");
        break;
    case 3:
        console.log("me elegiste, soy el 3");
        break;
    case 4:
        console.log("me elegiste, soy el 4");
        break;
    case 5:
        console.log("me elegiste, soy el 5");
        break;
    default:
        console.log("No te pases");
        break;
}

/*Bucles o Ciclos o Loops*/
//While
console.log("*************");
let bucle = 0;
while (bucle < 5) {
    console.log("Soy parte del bucle while");
    bucle++;
}

//Do / While
console.log("*************");
let bucle2 = 0;
let arregloBucle = [];
do {
    arregloBucle.push(bucle2);
    bucle2++;
} while (bucle2 < 10)
console.log(arregloBucle);

//For
console.log("*************");
for (i = 1; i <= 5; i++) {
    console.log(`${i} soy parte del loop for`);
}

//For in
console.log("*************");
const objeto = {
    nombre: "Fer",
    apellido: "Mavec",
    edad: 34
}
for (const propiedad in objeto) {
    console.log(propiedad);
    console.log(`Asi accedes a los valores ${objeto[propiedad]}`);
}

//For of
console.log("*************");
let elementos = [12, 5, 8, 1, 35, 48, 25, 16, 48, 100];
for (const elemento of elementos) {
    if (elemento % 2 === 0) {
        console.log(elemento);
    }
}
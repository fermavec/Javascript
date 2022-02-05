//Symvols
console.log("************");
let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id, id2);

const NOMBRE = Symbol();
const persona = {
    [NOMBRE]: "Fernando"
}

console.log(persona);
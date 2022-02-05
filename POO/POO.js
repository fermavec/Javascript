/*POO*/
//Clases => Moldes o Modelos a Seguir
//Objtos => Son la instancia de una clase
//Atributos => Caracteristica o Propiedad del Objeto (las variables dentro del objeto)
//Metodos => Acciones del objeto (Las funciones de un objeto)
//Prototipo es un mecanismo a traves del cual un objeto podra heredar atributos y metodos de un objeto padre

console.log("************");
console.log("Prototipos");

//Creando Prototipo
//1.Función Constructora
//Con funciones constructoras, tanto metodos como atributos deben llevar this
function Muppet(name, color, talent) {
    //Atributos
    this.name = name;
    this.color = color;
    this.talent = talent;
}

//2. Asignando Metodos al Prototipo
Muppet.prototype.talento = function() {
    console.log(`Me llamo ${this.name}, soy de color ${this.color} y ${this.talent}`);
}

//3. Instanciando
const animal = new Muppet("Animal", "Rojo", "Toco la bateria con Dave Grohl"),
    lucas = new Muppet("Lucas", "Azul", "Como muchas galletas");

console.log(animal);
console.log(lucas);
animal.talento();
lucas.talento();

//Herencia Prototipal
console.log("************");
console.log("Herencia Prototipal");

//Funcion constructora de la Herencia Prototipal
function SpacialMuppet(name, color, talent, origen) {
    this.super = Muppet;
    this.super(name, color, talent);
    this.origen = origen;
}


//Creando Prototipo
//Spacial Muppet esta heredando de Muppet
SpacialMuppet.prototype = new Muppet();
SpacialMuppet.prototype.constructor = SpacialMuppet;

//Sobrescribiendo Metodos
SpacialMuppet.prototype.talento = function() {
    console.log(`Me llamo ${this.name} y solo soy un prototipo de Muppet`);
}
SpacialMuppet.prototype.speedTravel = function() {
    console.log("Viajo a aproximadamente 200 000 kms/s");
}

//Instanciando
const jupeto = new SpacialMuppet("Jupeto", "Naranja", "Emito gases poderosos", "Jupiter/Sistema Solar");

console.log(jupeto);
jupeto.talento();
jupeto.speedTravel();

//Clases y Herencia
console.log("************");
console.log("Clases y Herencia");

class Animal {
    constructor(nombre, especie) {
        //Atributos
        this.nombre = nombre;
        this.especie = especie;
    }
    educar() {
        console.log(`Hola, soy un ${this.nombre} de la especie ${this.especie}`);
    }
}

const lobo = new Animal("Lobo", "Mamifero");
const pato = new Animal("Pato", "Ave");

console.log(lobo);
console.log(pato);
lobo.educar();
pato.educar();

//Herencia
class Dinosaurio extends Animal {
    constructor(nombre, especie, extincion) {
        super(nombre, especie);
        this.extincion = extincion;
        //Lo mandaré al Getters y Setters
        this.dieta = null;
    }
    educar() {
        console.log(`Hola, soy un ${this.nombre} de la especie ${this.especie}`);
    }
    estado() {
        if (this.extincion) {
            console.log(`Pero ya me extinguí hace muchos miles de años`);
        } else {
            console.log(`Y aun sobrevivo`);
        }
    }
    static sobreMi() {
        //Metodo Estatico
        console.log("Los dinosaurios fuimos animales que habitamos la tierra durante cierto periodo");
    }
    get getDieta() {
        //getter
        return this.dieta;
    }
    set setDieta(dieta) {
        //setter
        this.dieta = dieta;
    }
}

const tiranosaurio = new Dinosaurio("Tiranosaurio Rex", "Reptil", true);
const cocodrilo = new Dinosaurio("Cocodrilo", "Reptil", false);

console.log(tiranosaurio);
console.log(cocodrilo);
tiranosaurio.educar();
tiranosaurio.estado();
cocodrilo.educar();
cocodrilo.estado();

//Metodo estatico
//Es aquel que se puede ejecutar sin necesidad de instanciar un objeto
console.log("************");
console.log("Metodos estaticos");
console.log("Vengo de la clase dinosaurio, heredada de animal");
Dinosaurio.sobreMi();

//Setters y Getters
console.log("************");
console.log("Setters y Getters");

console.log(`Me obtuvieron antes de setear mi valor: ${tiranosaurio.getDieta}`);
tiranosaurio.setDieta = "Carnivoro";
console.log(`Me obtuvieron despues de setear mi valor: ${tiranosaurio.getDieta}`);
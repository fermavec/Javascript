//Peliculas
console.log("*******************");

//1.Funcion Constructora
function Pelicula(title, director, year, origin, gender, rate) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.origin = origin;
    this.gender = gender;
    this.rate = rate;
}

//2.Asignar metodos al prototipo
Pelicula.prototype.info = function() {
    console.log(`La pelicula ${this.title}, del director ${this.director}, fue creada en ${this.year} y proviene de ${this.origin}.
    Es del genero ${this.gender} y tiene una calificacion de ${this.rate} en IMDB.`);
}

//3. Instanciear
const fightClub = new Pelicula("Fight Club", "David Fincher", 1999, "USA", "Drama", 8.8);
fightClub.info();

console.log(Pelicula);
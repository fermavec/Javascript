console.log("**********");
class Pelicula {
    constructor({ id, titulo, director, estreno, pais, genero, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGenero(genero);
        this.validarCalificacion(calificacion);
    }

    //Atributo estatico
    static get listaGeneros() {
        return ["Acción", "Aventuras", "Ciencia Ficción", "Comedia", "Documental", "Drama", "Fantasía", "Musical"];
    };
    //Metodo Estatico
    static get generosAceptados() {
        return console.info(`Los generos aceptados son ${Pelicula.listaGeneros.join(", ")}`);
    }

    validarCadena(propiedad, valor) {
        if (!valor) return console.warn(`Debes ingresar un valor a ${propiedad}`);
        if (typeof valor !== 'string') return console.error(`Tu valor de ${propiedad} no es cadena de texto ${typeof(valor)}`);

        return true;
    }

    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`Debes ingresar un valor a ${propiedad}`);
        if (typeof valor !== 'number') return console.error(`Tu valor de ${propiedad} no es numero ${typeof(valor)}`);

        return true;
    }

    validarArreglo(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} debe contener un valor`);
        if (!(valor instanceof Array)) return console.error(`${valor} no es un arreglo`);
        if (valor.length === 0) console.error(`${propiedad} contiene un arreglo sin datos`);

        for (let cadena of valor) {
            if (typeof cadena !== 'string') return console.error(`El valor ${cadena} NO es cadena de texto`);
        }

        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (!valor) return console.warn(`Debes ingresar un valor a ${propiedad}`);
        if (valor.length > longitud) return console.error(`${propiedad} tiene ${valor.length} caracteres y debe tener ${longitud}`);
        return true;
    }

    validarLongitudAnio(propiedad, valor) {
        if (!(/^([0-9]){4}$/.test(estreno))) return console.error(`${propiedad} es ${valor} y no tiene los 4 digitos requeridos`);
        return true;
    }

    validarIMDB(id) {
        if (this.validarCadena("Id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.error(`El IMDB "${id}" no es valido`);
            } else { //Borrar al terminar de validar
                return console.log("lo lograste!!!!");
            }
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadena("Titulo", titulo)) {
            this.validarLongitudCadena("Titulo", titulo, 100);
        }
    }

    validarDirector(director) {
        if (this.validarCadena("Director", director)) {
            this.validarLongitudCadena("Director", director, 50);
        }
    }

    validarEstreno(estreno) {
        if (this.validarNumero("Estreno", estreno)) {
            if (!(/^([0-9]){4}$/.test(estreno))) {
                return console.error(`El año "${estreno}" no es valido`);
            } else if (estreno < 1860) {
                return console.error(`No creo que existiera el cine en ${estreno}`);
            }
        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificacion", calificacion)) {
            if (calificacion < 0) {
                return console.error(`${calificacion} no está en rango`);
            } else if (calificacion > 10) {
                return console.error(`${calificacion} no está en rango`);
            }
        }
    }

    validarPais(pais) {
        this.validarArreglo("Pais", pais);
    }

    validarGenero(genero) {
        if (this.validarArreglo("Genero", genero)) {
            for (let genre of genero) {
                if (!(Pelicula.listaGeneros.includes(genre))) {
                    console.error(`${genre} no es un genero valido`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

}


const instanciaPelicula = new Pelicula({
    id: "tt0137523",
    titulo: "Fight Club",
    director: "David Fincher",
    estreno: 1999,
    pais: ["Germany", "United States"],
    genero: ["Drama"],
    calificacion: 8.8,
});

console.log(instanciaPelicula);
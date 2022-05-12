// Todas las caracteristicas de un animal relevantes para nuestro sistema, 
// se encapsulan en una clase donde se abstraen dichas características
// Sintaxis: 2015 ES6
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    consultaDetalles() {
        return (`El nombre del animal es: ${this.nombre} y su tipo es: ${this.tipo}`);
    }
}

class Mamifero extends Animal
{
    constructor(nombre, tipo, especial)
    {
        super(nombre, tipo);
        this.especial = especial;
    }

    consultaDetalles() {
        return (`El nombre del animal es: ${this.nombre} y su tipo es: ${this.tipo} el campo especial es: ${this.especial}`);
    }
}

class Oviparo extends Animal
{

}

function imprimeAnimal(animal) {
    try {
        console.log(animal.consultaDetalles());
    } catch (error) {
        console.log(animal);
        console.log("Se recibió un objeto que no es animal...");
        console.log(error.message);
    }
}

// Se instancia la clase Animal y se crea un objeto de ese tipo
let animal1 = new Animal("hipopotamo","mamífero");
let animal2 = new Animal("pelicano","ave");

let mamifero1 = new Mamifero("toro", "mamífero", "especial");

imprimeAnimal(animal1);
imprimeAnimal(animal2);
imprimeAnimal(mamifero1);

//imprimeAnimal(10);
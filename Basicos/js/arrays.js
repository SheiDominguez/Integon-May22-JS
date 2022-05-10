let numeros = [8,9,12,45];
numeros.push(84);
console.log(numeros);
console.log(numeros[0]); // arrays son zero-based
console.log(numeros[4]); // arrays son zero-based
console.log(numeros.length);

for(let index = 0; index < numeros.length; index++)
{
    console.log(numeros[index]);
}

numeros.forEach(element => {
    console.log(element);
});

let condiciones = [true, false, true, true, false];
condiciones.forEach(e => {
    console.log(e);
});

let personas = [];

personas.push({
    nombre: "juan",
    apellido: "perez"
},{
    nombre: "john",
    apellido: "doe"
},{
    nombre: "miguel",
    apellido: "suarez",
    edad: 34
});

personas.push({
    base: 45.12,
    altura: 10.3
});

personas.push(5);

personas.forEach(p => {
    console.log(p);
});
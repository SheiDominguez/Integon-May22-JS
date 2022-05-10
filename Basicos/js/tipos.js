'use strict' // <- evita que se puedan usar variables sin declarar
var variable = 'Sheila Guadalupe Dominguez Jimenez';
console.log(variable);
console.log(typeof variable);
console.log(`El nombre del usuario es ${variable}`);

variable = 100.23;
console.log(variable);
console.log(typeof variable);

variable = true;
console.log(variable);
console.log(typeof variable);

variable = {
    "Nombre": `Sheila`,
    "Ciudad": "Villahermosa",
    "Profesion": "Developer Jr"
}
console.log(variable);
console.log(typeof variable);

variable = function(a,b){
    if(a > b)
        return a;
    else
        return b;
}
console.log(variable);
var resultado = variable(8,243);
console.log(resultado);
console.log(typeof variable);

variable = new Date();
console.log(variable);
console.log(typeof variable);

//prueba = 24;
//console.log(prueba);

let dato1 = 100;
let dato2 = 200;
let dato3 = 50;

if(dato1 > dato2 && dato2 > dato3)
    console.log("se cumple la condición");
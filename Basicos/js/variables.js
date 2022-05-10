'use strict'
let datoGeneral = 100; //camelCasing
calculo1();
calculo2();
console.log(datoGeneral);

function calculo1()
{
    datoGeneral = 150;
    datoGeneral += 5;
    if(datoGeneral > 100)
    {
        let otraVariable = 200;
        console.log(`El valor de la otra variable es: ${otraVariable}`);
    }
    //console.log(otraVariable);
}

function calculo2()
{
    datoGeneral += 10;
}
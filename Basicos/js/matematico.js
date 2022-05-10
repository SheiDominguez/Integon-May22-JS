function sumar()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operacion = parseInt(num1) + parseInt(num2);
    console.log(operacion);
    //return operacion;
}

function restar()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    console.log(num1 - num2);
    //return num1 - num2;
}

function multiplicar()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    console.log(num1 * num2);
    //return num1 * num2;
}

function dividir()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    console.log(num1 / num2);
    //return num1 / num2;
}
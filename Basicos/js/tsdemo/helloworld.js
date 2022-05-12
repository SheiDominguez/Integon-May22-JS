let ArregloRegistro = [];
let mensaje = "Hola mundo";
let dato = 5;
let encendido = false;
let otracadena = "";
let ejemplo1 = [10, "cadena1", true];
let ejemplo2 = [20, "cadena2", false];
let ejemplo3 = [30, "cadena3", true];
ArregloRegistro.push(ejemplo1);
ArregloRegistro.push(ejemplo2);
ArregloRegistro.push(ejemplo3);
function imprimirRegistros(arreglo) {
    for (let registro of arreglo) {
        console.log(registro);
    }
}
imprimirRegistros(ArregloRegistro);
//# sourceMappingURL=helloworld.js.map
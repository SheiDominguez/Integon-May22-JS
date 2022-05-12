type Registro = [number, string, boolean];
//let ArregloRegistro : Array<Registro> = [];
let ArregloRegistro : Registro[] = [];


let mensaje : string = "Hola mundo";
let dato : number = 5;
let encendido: boolean = false;
let otracadena : string = "";

let ejemplo1 : Registro = [10,"cadena1",true];
let ejemplo2 : Registro = [20,"cadena2",false];
let ejemplo3 : Registro = [30,"cadena3",true];

ArregloRegistro.push(ejemplo1);
ArregloRegistro.push(ejemplo2);
ArregloRegistro.push(ejemplo3);

function imprimirRegistros(arreglo: Array<Registro>) : void {
    for(let registro of arreglo)
    {
        console.log(registro);
    }
}
imprimirRegistros(ArregloRegistro);


/*console.log(mensaje);
let encabezado = document.createElement("h1");
encabezado.textContent = mensaje;
document.body.appendChild(encabezado);*/
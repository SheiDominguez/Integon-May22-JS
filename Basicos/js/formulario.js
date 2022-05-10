let personas = [];
function Validacion(form)
{
    let nombre = document.getElementById("formNombre").value;
    let edad = parseInt(document.getElementById("formEdad").value);
    let ingreso = parseInt(document.getElementById("formIngreso").value);
    
    if(nombre == "")
    {
        alert("El nombre no debe ir vacío");
    }
    else if(isNaN(edad))
    {
        alert("La edad debe ser un número");
    } 
    else if(isNaN(ingreso))
    {
        alert("El ingreso debe ser un número");
    }
    else {
        let registro = {
            Nombre: nombre,
            Edad: edad,
            Ingreso: ingreso
        }
        personas.push(registro);
        console.log(registro);
        console.log(personas);

        document.getElementById("formNombre").value = "";
        document.getElementById("formEdad").value = "";
        document.getElementById("formIngreso").value = "";
    }
}
let autor1 = new Author("../assets/img/team-2.jpg", "John Michael", "john@creative-tim.com", "Manager", "Organization", "23/04/18", "Online");
let autor2 = new Author("../assets/img/team-3.jpg", "Alexa Liras", "alexa@creative-tim.com", "Programator", "Developer", "11/01/19", "Offline");
let autor3 = new Author("../assets/img/team-4.jpg", "Laurent Perrier", "laurent@creative-tim.com", "Executive", "Projects", "19/09/17", "Online");
let autors = [];
autors.push(autor1);
autors.push(autor2);
autors.push(autor3);
let authorCounter = 0;

function addAuthorToTable(autor)
{
   let table = document.getElementById("AuthorsTable");
    let tbody = table.children[1];

    let newAuthor = tbody.insertRow(0);
    let name = newAuthor.insertCell(0);
    name.innerHTML = `
    <div class="d-flex px-2 py-1">
        <div>
        <img src="${autor.foto}" class="avatar avatar-sm me-3" alt="user1">
        </div>
        <div class="d-flex flex-column justify-content-center">
        <h6 class="mb-0 text-sm">${autor.nombre}</h6>
        <p class="text-xs text-secondary mb-0">${autor.correo}</p>
        </div>
    </div>`;

    let funcion = newAuthor.insertCell(1);
    funcion.innerHTML = `
    <p class="text-xs font-weight-bold mb-0">${autor.puesto}</p>
    <p class="text-xs text-secondary mb-0">${autor.departamento}</p>`;
    
    let status = newAuthor.insertCell(2);
    if(autor.estatus == "Online")
        status.innerHTML = `<span class="badge badge-sm bg-gradient-success">${autor.estatus}</span>`; 
    else
        status.innerHTML = `<span class="badge badge-sm bg-gradient-secondary">${autor.estatus}</span>`;
    status.className = "align-middle text-center text-sm";

    let employed = newAuthor.insertCell(3);
    employed.innerHTML = `<span class="text-secondary text-xs font-weight-bold">${autor.fechaIngreso}</span>`;
    employed.className = "align-middle text-center";

    let edit = newAuthor.insertCell(4);
    edit.innerHTML = `
    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        Edit
    </a>`;
    edit.className = "align-middle";
}

function cleanTable()
{
    let table = document.getElementById("AuthorsTable");
    let tbody = table.children[1];
    tbody.innerHTML = "";
}

function showForm(display)
{
    let div = document.getElementById("formAddAuthor");
    if(display)
        div.style.display = "block";
    else
        div.style.display = "none";
}

$(document).ready(function () {
    obtenerAutores();
});

function obtenerAutores() {
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'http://localhost:3005/autores',
        success: function (data) {
            for(let i = 0; i < data.autores.length ; i++)
            {
                addAuthorToTable(data.autores[i]);
            }
        }
    });
}

function saveAuthor(form) {
    let foto = document.getElementById("txtFoto").value;
    if(foto == "")
    {
        alert("Foto no puede ser vacío");
        return;
    }
    let nombre = document.getElementById("txtNombre").value;
    if(nombre == "")
    {
        alert("Nombre no puede ser vacío");
        return;
    }
    let correo = document.getElementById("txtCorreo").value;
    if(correo == "")
    {
        alert("Correo no puede ser vacío");
        return;
    }
    let puesto = document.getElementById("txtPuesto").value;
    if(puesto == "")
    {
        alert("Puesto no puede ser vacío");
        return;
    }
    let departamento = document.getElementById("txtDepartamento").value;
    if(departamento == "")
    {
        alert("Departamento no puede ser vacío");
        return;
    }
    let fechaIngreso = document.getElementById("txtFechaIngreso").value;
    if(fechaIngreso == "")
    {
        alert("Fecha de Ingreso no puede ser vacío");
        return;
    }
    let estatus = document.getElementById("txtEstatus").value;
    if(estatus == "")
    {
        alert("Estatus no puede ser vacío");
        return;
    }

    $.ajax({
        method: 'POST',
        dataType: 'json',
        contentType: "application/json",
        url: 'http://localhost:3005/autores',
        data: JSON.stringify({
            foto: foto, 
            nombre: nombre, 
            correo: correo, 
            puesto: puesto, 
            departamento: departamento, 
            fechaIngreso: fechaIngreso, 
            estatus: estatus
        }),
        success: function (data) {
            //console.log(data);
            showForm(false);
            cleanTable();
            obtenerAutores();
        }
    });
}
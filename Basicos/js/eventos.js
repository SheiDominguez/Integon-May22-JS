function generateUI(){
    let divPrincipal = document.getElementById("contenido");

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    button1.innerText = "Boton 1";
    button2.innerText = "Boton 2";

    divPrincipal.appendChild(button1);
    divPrincipal.appendChild(button2);

    button1.addEventListener("click", function(e){
        console.log("Boton 1 clicked");
    });
    button2.addEventListener("click", e => {
        console.log("Boton 2 clicked");
    });
    button2.addEventListener("click", clickGeneral);
}

function clickGeneral()
{
    alert("Click General");
}
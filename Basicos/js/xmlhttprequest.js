function AccesoAPI()
{
    console.log("Llamando a SWAPI");
    const url = "https://swapi.dev/api/planets/1";
    // Se crea el objeto (no viene instalado en node pero si en el navegador)
    let xhttp = new XMLHttpRequest();
    // Abre la conexión con el método GET
    xhttp.open('GET', url);
    // Se configura que se acepte un resultado de tipo json
    xhttp.setRequestHeader('Accept', 'application/json');
    // Se delega el evento onreadystatechange
    xhttp.onreadystatechange = function() {
        if(this.readyState == 1)
        {
            console.log("Opened...");
        }
        if(this.readyState == 3)
        {
            console.log("Loading...");
        }
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
            console.log(JSON.stringify(data));
            console.log(data.name);
            console.log(data.rotation_period);
            /*const game = data.events[0];
            document.getElementById("game_date").innerHTML = game.dateEvent;
            document.getElementById("away_team").innerHTML = game.strAwayTeam;
            document.getElementById("home_team").innerHTML = game.strHomeTeam;*/
        }
        if (this.readyState == 4 && this.status == 404) {
            console.log("Ese planeta no existe...");
        }
    }
    // Envía la petición
    xhttp.send();
}

AccesoAPI();
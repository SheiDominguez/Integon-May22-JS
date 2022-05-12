const url = "http://localhost:3005/signIn";

let accounts = [
    {
        email: "sgdominguezj@gmail.com",
        password: "1234"
    },
    {
        email: "tess.tesa18@hotmail.com",
        password: "bts"
    },
    {
        email: "antonio@gmail.com",
        password: "1234"
    },
    {
        email: "enriqueta@gmail.com",
        password: "1234"
    },
    {
        email: "userundefined@gmail.com",
        password: "12345"
    }
];
let btnSignIn = document.getElementById("btnSingIn");
btnSignIn.addEventListener("click", SignInFetch);

function signIn()
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let messageDiv = document.getElementById("message");
    let containerDiv = document.getElementById("container");

    messageDiv.style.display = "none";
    let account = accounts.filter(x => x.email == email && x.password == password);

    if(account.length > 0) {
        containerDiv.innerHTML = "";
        let html = `<h3 class="font-weight-bolder text-info text-gradient">Usuario loggeado: ${account[0].email}</h3>`;
        containerDiv.innerHTML = html;
    } else {
        messageDiv.style.display = "block";
        messageDiv.style.color = "red";
        messageDiv.innerText = "El usuario y/o contraseña son incorrectos.";

        setTimeout(() => { messageDiv.style.display = "none"; }, 5000);
    }
}

function SignInFetch()
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let messageDiv = document.getElementById("message");
    let containerDiv = document.getElementById("container");

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: email, password: password})
    })
    .then((response) => {
            return response.json();
    })
    .then((data) => {
        if(data.users.length > 0)
        {
            user = data.users[0];

            containerDiv.innerHTML = "";
            let html = `<h3 class="font-weight-bolder text-info text-gradient">Usuario loggeado: ${user.user}</h3>`;
            containerDiv.innerHTML = html;
        }
        else
        {
            messageDiv.style.display = "block";
            messageDiv.style.color = "red";
            messageDiv.innerText = "El usuario y/o contraseña son incorrectos.";

            setTimeout(() => { messageDiv.style.display = "none"; }, 5000);
        }
    })
    .catch((error) => {
        console.log("El servidor no está disponible");
    });
}
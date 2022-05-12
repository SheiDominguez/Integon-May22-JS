const { response, request, json } = require("express");
const cors = require('cors');
// Requerimos el modulo de express que instalamos
const express = require("express");
// Cliente de mongo
const mongo = require("mongodb").MongoClient;
let ObjectId = require('mongodb').ObjectId;
// Definimos una app de express
const app = express();
// Middleware
app.use(express.json()); // <- Permite el parseo del Body para los post
// Cors-Origin-Resource-Sharing (CORS)
app.use(cors({
    origin: '*'
}));

// Ruta por defecto donde corre mongodb a menos que se cambie a la hora de instalarlo
const url = "mongodb://localhost:27017";

let db, alumnos,cursos, autores, users
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    db = client.db("cursojavascript");
    console.log("Conectado a la DB");
    alumnos = db.collection("alumnos");
    cursos = db.collection("cursos");
    autores = db.collection("autores");
    users = db.collection("users");
});

app.get("/demo", (request, response) => {
    console.log("Se ejecuto la ruta demo...");
    response.status(200).json({ok: true});
});

app.get("/alumnos", (request, response) => {
    console.log("Se ejecuto la ruta alumnos...");
    alumnos.find().toArray((err, items) => {
        if(err){
            console.log(err);
            response.status(500).json({error: err});
        }
        response.status(200).json({alumnos: items});
    });
});


app.get("/alumnos/:id", (request, response) => {
    console.log("Se ejecuto la ruta alumnos id...");
    let alumnoId = request.params.id;
    console.log(alumnoId);
    alumnos.find({_id : ObjectId(alumnoId)}).toArray((err, alumno) => {
        if(err){
            console.log(err);
            response.status(500).json({error: err});
        }
        response.status(200).json({alumno: alumno});
    });
});

app.post("/alumnos", (request, response) => {
    console.log("Se ejecuto la ruta alumnos...");
    console.log(request.body);
    alumnos.insertOne(
        {
            name: request.body.name,
            apellido: request.body.apellido,
            ciudad: request.body.ciudad
        },
        (err, result) => {
            if(err) {
                console.log(err);
                response.status(500).json({error: err});
            }
            response.status(200).json({ok: true});
        }
    );
});

app.get("/autores", (request, response) => {
    autores.find().toArray((err, items) => {
        if(err){
            console.log(err);
            response.status(500).json({error: err});
        }
        response.status(200).json({autores: items});
    });
});

app.post("/autores", (request, response) => {
    //console.log(request.body);
    autores.insertOne(
        {
            foto : request.body.foto,
            nombre : request.body.nombre,
            correo : request.body.correo,
            puesto : request.body.puesto,
            departamento : request.body.departamento,
            fechaIngreso : request.body.fechaIngreso,
            estatus : request.body.estatus
        },
        (err, result) => {
            if(err) {
                console.log(err);
                response.status(500).json({error: err});
            }
            response.status(200).json({ok: true});
        }
    );
});


app.post("/signIn", (request, response) => {
    //console.log(request.body);
    users.find({user: request.body.user, password: request.body.password}).toArray((err, items) => {
        if(err){
            console.log(err);
            response.status(500).json({error: err});
        }
        response.status(200).json({users: items});
    });
});

// Cualquier puerto después de 1024
app.listen(3005, () => {
    console.log("Escuchando en el puerto 3005...");
});
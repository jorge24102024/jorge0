const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql"); // Importar el paquete mysql

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'mokepon'
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

const jugadores = [];

class Jugador {
  constructor(id) {
    this.id = id;
  }

  asignarMokepon(mokepon) {
    this.mokepon = mokepon;
  }

  actualizarPosicion(x, y) {
    this.x = x;
    this.y = y;
  }
  
  asignarAtaques(ataques) {
    this.ataques = ataques;
  }
}

class Mokepon {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Ruta para unirse
app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`;
  const jugador = new Jugador(id);
  jugadores.push(jugador);
  
  // Aquí guardamos el nombre en la base de datos
  const nombreJugador = req.body.nombre || 'Jugador sin nombre'; // Obtener nombre desde el cuerpo de la solicitud
  const query = 'INSERT INTO jugadores (nombre) VALUES (?)';
  db.query(query, [nombreJugador], (err, result) => {
    if (err) {
      console.error('Error al insertar el jugador:', err);
      return res.status(500).send('Error al guardar el jugador');
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(id);
  });
});

// ... otras rutas

// Iniciar el servidor
app.listen(8080, () => {
  console.log("Servidor funcionando");
});

const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/insertar_jugador', (req, res) => {
    const nombre = req.body.nombre;
    if (!nombre) {
        return res.status(400).send('El nombre es requerido.');
    }

    const query = 'INSERT INTO jugadores (nombre) VALUES (?)';
    connection.query(query, [nombre], (err, results) => {
        if (err) {
            console.error('Error al insertar el jugador:', err);
            return res.status(500).send('Error en la base de datos.');
        }
        res.send('Jugador registrado correctamente.');
    });
});

// Inicia el servidor en el puerto 8080 (o el que desees)
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

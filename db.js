const mysql = require('mysql');

// Crear conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',  // o la dirección de tu servidor MySQL
  user: 'root',       // tu usuario de MySQL
  password: '12345',  // tu contraseña de MySQL
  database: 'mokepon' // tu base de datos
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db; // Exportar la conexión para usarla en otros archivos

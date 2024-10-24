<?php
$servername = "localhost";
$username = "root"; // Cambia esto según tu configuración
$password = "12345"; // La contraseña que estableciste
$dbname = "tu_base_de_datos"; // Cambia esto por el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Nombre del jugador que deseas insertar
$nombreJugador = "Nombre del jugador"; // Cambia esto por el nombre real del jugador

// Consulta para insertar el nombre del jugador
$sql = "INSERT INTO jugadores (nombre) VALUES ('$nombreJugador')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo registro creado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

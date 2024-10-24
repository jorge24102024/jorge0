<?php
include 'conexion.php'; // Incluye el archivo de conexión

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre']; // Obtener el nombre del jugador desde la solicitud POST

    // Preparar y vincular
    $stmt = $conn->prepare("INSERT INTO jugadores (nombre) VALUES (?)");
    $stmt->bind_param("s", $nombre); // 's' indica que es un string

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo "Jugador insertado correctamente";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Cerrar la conexión
    $stmt->close();
}

$conn->close();
?>

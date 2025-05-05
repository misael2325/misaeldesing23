-- Crear la base de datos
CREATE DATABASE ClientesDB;

-- Usar la base de datos
USE ClientesDB;

-- Crear la tabla para almacenar los datos de los clientes
CREATE TABLE Clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);          
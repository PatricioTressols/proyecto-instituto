# proyecto-instituto
Gestión de Estudiantes, Profesores y Cursos
Este proyecto es una aplicación web para gestionar estudiantes, profesores y cursos en un instituto. Se desarrolla utilizando Node.js, Express.js y MySQL para el backend, y HTML, CSS, y JavaScript para el frontend.

Requisitos Previos
Node.js instalado (Descargar Node.js).
MySQL instalado y configurado (Descargar MySQL).
Editor de texto o IDE (por ejemplo, VS Code).
Git instalado (Descargar Git).
Configuración del Backend
Clona este repositorio en tu máquina:

bash
Copiar código
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
Instala las dependencias del backend:

bash
Copiar código
npm install
Configura la base de datos:

Abre MySQL Workbench u otra herramienta de gestión de MySQL.
Crea una base de datos llamada instituto ejecutando el siguiente comando:
sql
Copiar código
CREATE DATABASE instituto;
Importa el archivo instituto.sql incluido en el proyecto para crear las tablas necesarias.
Configura el archivo .env:

En el directorio raíz, crea un archivo llamado .env y agrega lo siguiente:
makefile
Copiar código
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=instituto
Inicia el servidor:

bash
Copiar código
npm start
El backend estará disponible en http://localhost:3000.

Configuración del Frontend
Abre el archivo index.html en el navegador:

Este archivo está en la carpeta raíz del proyecto.
Asegúrate de que el backend esté en ejecución para que el frontend pueda conectarse correctamente.

Pruebas del Proyecto
Estudiantes: Registra, edita y elimina estudiantes.
Profesores: Realiza operaciones CRUD similares para los profesores.
Cursos: Gestiona los cursos vinculados a estudiantes y profesores.
Futuras Mejoras
Implementar autenticación y roles de usuario.
Validación avanzada de formularios en el frontend.
Despliegue en plataformas como Heroku o Railway.

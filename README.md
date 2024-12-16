# proyecto-instituto
Gestión de Estudiantes, Profesores y Cursos

Este proyecto es una aplicación web para gestionar estudiantes, profesores y cursos en un instituto. Se desarrolla utilizando Node.js, Express.js y MySQL para el backend, y HTML, CSS, y JavaScript para el frontend.

Requisitos Previos

1. Node.js instalado (Descargar Node.js).


2. MySQL instalado y configurado (Descargar MySQL).


3. Editor de texto o IDE (por ejemplo, VS Code).


4. Git instalado (Descargar Git).




---

Configuración del Backend

1. Clona este repositorio en tu máquina:

git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>


2. Instala las dependencias del backend:

npm install


3. Configura la base de datos:

Abre MySQL Workbench u otra herramienta de gestión de MySQL.

Crea una base de datos llamada instituto ejecutando el siguiente comando:

CREATE DATABASE instituto;

Importa el archivo instituto.sql incluido en el proyecto para crear las tablas necesarias.



4. Configura el archivo .env:

En el directorio raíz, crea un archivo llamado .env y agrega lo siguiente:

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=instituto



5. Inicia el servidor:

npm start

El backend estará disponible en http://localhost:3000.




---

Configuración del Frontend

1. Abre el archivo index.html en el navegador:

Este archivo está en la carpeta raíz del proyecto.



2. Asegúrate de que el backend esté en ejecución para que el frontend pueda conectarse correctamente.




---

Pruebas del Proyecto

Estudiantes: Registra, edita y elimina estudiantes.

Profesores: Realiza operaciones CRUD similares para los profesores.

Cursos: Gestiona los cursos vinculados a estudiantes y profesores.



---

Futuras Mejoras

1. Implementar autenticación y roles de usuario.


2. Validación avanzada de formularios en el frontend.


3. Despliegue en plataformas como Heroku o Railway.

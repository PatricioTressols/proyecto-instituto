const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const studentRoutes = require('./routes/students');
const teacherRoutes = require('./routes/teachers');
const courseRoutes = require('./routes/courses');

app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/courses', courseRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

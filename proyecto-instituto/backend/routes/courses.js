const express = require('express');
const db = require('../db/connection');
const router = express.Router();

// Obtener todos los cursos
router.get('/', (req, res) => {
    db.query('SELECT * FROM courses', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Agregar un nuevo curso
router.post('/', (req, res) => {
    const { name, description } = req.body;
    db.query(
        'INSERT INTO courses (name, description) VALUES (?, ?)',
        [name, description],
        (err, results) => {
            if (err) throw err;
            res.json({ id: results.insertId, name, description });
        }
    );
});

// Editar un curso existente
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    db.query(
        'UPDATE courses SET name = ?, description = ? WHERE id = ?',
        [name, description, id],
        (err, results) => {
            if (err) throw err;
            res.json({ message: 'Curso actualizado' });
        }
    );
});

// Eliminar un curso
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM courses WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Curso eliminado' });
    });
});

module.exports = router;

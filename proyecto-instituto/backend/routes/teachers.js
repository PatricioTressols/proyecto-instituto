const express = require('express');
const db = require('../db/connection');
const router = express.Router();

// Obtener todos los profesores
router.get('/', (req, res) => {
    db.query('SELECT * FROM teachers', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Agregar un nuevo profesor
router.post('/', (req, res) => {
    const { name, email, course_id } = req.body;
    db.query(
        'INSERT INTO teachers (name, email, course_id) VALUES (?, ?, ?)',
        [name, email, course_id],
        (err, results) => {
            if (err) throw err;
            res.json({ id: results.insertId, name, email, course_id });
        }
    );
});

// Editar un profesor existente
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, course_id } = req.body;
    db.query(
        'UPDATE teachers SET name = ?, email = ?, course_id = ? WHERE id = ?',
        [name, email, course_id, id],
        (err, results) => {
            if (err) throw err;
            res.json({ message: 'Profesor actualizado' });
        }
    );
});

// Eliminar un profesor
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM teachers WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Profesor eliminado' });
    });
});

module.exports = router;

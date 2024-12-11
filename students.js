const express = require('express');
const db = require('../db/connection');
const router = express.Router();

router.get('/', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { name, email, course_id } = req.body;
    db.query('INSERT INTO students (name, email, course_id) VALUES (?, ?, ?)', 
    [name, email, course_id], 
    (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, name, email, course_id });
    });
});

module.exports = router;

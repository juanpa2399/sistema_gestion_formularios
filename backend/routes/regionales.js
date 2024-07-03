const express = require('express');
const router = express.Router();
const Regional = require('../models/Regional');

// Crear una nueva región
router.post('/', async (req, res) => {
    try {
        const regional = await Regional.create(req.body);
        res.status(201).json(regional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todas las regiones
router.get('/', async (req, res) => {
    try {
        const regionales = await Regional.findAll();
        res.status(200).json(regionales);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener una región por ID
router.get('/:id', async (req, res) => {
    try {
        const regional = await Regional.findByPk(req.params.id);
        if (regional) {
            res.status(200).json(regional);
        } else {
            res.status(404).json({ error: 'Regional no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar una región por ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Regional.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedRegional = await Regional.findByPk(req.params.id);
            res.status(200).json(updatedRegional);
        } else {
            res.status(404).json({ error: 'Regional no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar una región por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Regional.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Regional no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
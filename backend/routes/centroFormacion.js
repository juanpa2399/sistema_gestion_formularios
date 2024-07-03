const express = require('express');
const router = express.Router();
const CentroFormacion = require('../models/CentroFormacion');

// Crear un nuevo centro de formación
router.post('/', async (req, res) => {
    try {
        const centroFormacion = await CentroFormacion.create(req.body);
        res.status(201).json(centroFormacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los centros de formación
router.get('/', async (req, res) => {
    try {
        const centrosFormacion = await CentroFormacion.findAll();
        res.status(200).json(centrosFormacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener un centro de formación por ID
router.get('/:id', async (req, res) => {
    try {
        const centroFormacion = await CentroFormacion.findByPk(req.params.id);
        if (centroFormacion) {
            res.status(200).json(centroFormacion);
        } else {
            res.status(404).json({ error: 'Centro de formación no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar un centro de formación por ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await CentroFormacion.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedCentroFormacion = await CentroFormacion.findByPk(req.params.id);
            res.status(200).json(updatedCentroFormacion);
        } else {
            res.status(404).json({ error: 'Centro de formación no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar un centro de formación por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await CentroFormacion.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Centro de formación no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

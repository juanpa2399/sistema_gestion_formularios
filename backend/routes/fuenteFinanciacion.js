const express = require('express');
const router = express.Router();
const FuenteFinanciacion = require('../models/FuenteFinanciacion');

// Crear una nueva fuente de financiación
router.post('/', async (req, res) => {
    try {
        const fuenteFinanciacion = await FuenteFinanciacion.create(req.body);
        res.status(201).json(fuenteFinanciacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todas las fuentes de financiación
router.get('/', async (req, res) => {
    try {
        const fuentesFinanciacion = await FuenteFinanciacion.findAll();
        res.status(200).json(fuentesFinanciacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener una fuente de financiación por ID
router.get('/:id', async (req, res) => {
    try {
        const fuenteFinanciacion = await FuenteFinanciacion.findByPk(req.params.id);
        if (fuenteFinanciacion) {
            res.status(200).json(fuenteFinanciacion);
        } else {
            res.status(404).json({ error: 'Fuente de financiación no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar una fuente de financiación por ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await FuenteFinanciacion.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedFuenteFinanciacion = await FuenteFinanciacion.findByPk(req.params.id);
            res.status(200).json(updatedFuenteFinanciacion);
        } else {
            res.status(404).json({ error: 'Fuente de financiación no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar una fuente de financiación por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await FuenteFinanciacion.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Fuente de financiación no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

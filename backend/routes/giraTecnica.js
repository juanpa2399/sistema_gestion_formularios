const express = require('express');
const router = express.Router();
const GiraTecnica = require('../models/GiraTecnica');

// Crear una nueva gira técnica
router.post('/', async (req, res) => {
    try {
        const giraTecnica = await GiraTecnica.create(req.body);
        res.status(201).json(giraTecnica);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todas las giras técnicas
router.get('/', async (req, res) => {
    try {
        const girasTecnicas = await GiraTecnica.findAll();
        res.status(200).json(girasTecnicas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener una gira técnica por ID
router.get('/:id', async (req, res) => {
    try {
        const giraTecnica = await GiraTecnica.findByPk(req.params.id);
        if (giraTecnica) {
            res.status(200).json(giraTecnica);
        } else {
            res.status(404).json({ error: 'Gira técnica no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar una gira técnica por ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await GiraTecnica.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedGiraTecnica = await GiraTecnica.findByPk(req.params.id);
            res.status(200).json(updatedGiraTecnica);
        } else {
            res.status(404).json({ error: 'Gira técnica no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar una gira técnica por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await GiraTecnica.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Gira técnica no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

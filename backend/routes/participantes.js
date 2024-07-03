const express = require('express');
const router = express.Router();
const Participantes = require('../models/Participantes');

// Crear un nuevo participante
router.post('/', async (req, res) => {
    try {
        const participante = await Participantes.create(req.body);
        res.status(201).json(participante);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los participantes
router.get('/', async (req, res) => {
    try {
        const participantes = await Participantes.findAll();
        res.status(200).json(participantes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener un participante por ID
router.get('/:id', async (req, res) => {
    try {
        const participante = await Participantes.findByPk(req.params.id);
        if (participante) {
            res.status(200).json(participante);
        } else {
            res.status(404).json({ error: 'Participante no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar un participante por ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Participantes.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedParticipante = await Participantes.findByPk(req.params.id);
            res.status(200).json(updatedParticipante);
        } else {
            res.status(404).json({ error: 'Participante no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar un participante por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Participantes.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Participante no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

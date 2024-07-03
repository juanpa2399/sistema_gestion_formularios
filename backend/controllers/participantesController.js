const Participantes = require('../models/Participantes');

exports.create = async (req, res) => {
    try {
        const participante = await Participantes.create(req.body);
        res.status(201).json(participante);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const participantes = await Participantes.findAll();
        res.status(200).json(participantes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
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
};

exports.update = async (req, res) => {
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
};

exports.delete = async (req, res) => {
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
};

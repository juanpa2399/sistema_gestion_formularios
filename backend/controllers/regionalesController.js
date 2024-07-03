const Regional = require('../models/Regional');

exports.create = async (req, res) => {
    try {
        const regional = await Regional.create(req.body);
        res.status(201).json(regional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const regionales = await Regional.findAll();
        res.status(200).json(regionales);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    try {
        const regional = await Regional.findByPk(req.params.id);
        if (regional) {
            res.status(200).json(regional);
        } else {
            res.status(404).json({ error: 'Regional no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await Regional.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedRegional = await Regional.findByPk(req.params.id);
            res.status(200).json(updatedRegional);
        } else {
            res.status(404).json({ error: 'Regional no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await Regional.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Regional no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

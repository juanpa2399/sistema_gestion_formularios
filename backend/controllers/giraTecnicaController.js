const GiraTecnica = require('../models/GiraTecnica');

exports.create = async (req, res) => {
    try {
        const giraTecnica = await GiraTecnica.create(req.body);
        res.status(201).json(giraTecnica);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const girasTecnicas = await GiraTecnica.findAll();
        res.status(200).json(girasTecnicas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
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
};

exports.update = async (req, res) => {
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
};

exports.delete = async (req, res) => {
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
};

const FuenteFinanciacion = require('../models/FuenteFinanciacion');

exports.create = async (req, res) => {
    try {
        const fuenteFinanciacion = await FuenteFinanciacion.create(req.body);
        res.status(201).json(fuenteFinanciacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const fuentesFinanciacion = await FuenteFinanciacion.findAll();
        res.status(200).json(fuentesFinanciacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
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
};

exports.update = async (req, res) => {
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
};

exports.delete = async (req, res) => {
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
};

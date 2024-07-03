const express = require('express');
const router = express.Router();
const fuenteFinanciacionController = require('../controllers/fuenteFinanciacionController');

router.post('/', fuenteFinanciacionController.create);
router.get('/', fuenteFinanciacionController.findAll);
router.get('/:id', fuenteFinanciacionController.findById);
router.put('/:id', fuenteFinanciacionController.update);
router.delete('/:id', fuenteFinanciacionController.delete);

module.exports = router;

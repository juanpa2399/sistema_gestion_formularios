const express = require('express');
const router = express.Router();
const centroFormacionController = require('../controllers/centroFormacionController');

router.post('/', centroFormacionController.create);
router.get('/', centroFormacionController.findAll);
router.get('/:id', centroFormacionController.findById);
router.put('/:id', centroFormacionController.update);
router.delete('/:id', centroFormacionController.delete);

module.exports = router;

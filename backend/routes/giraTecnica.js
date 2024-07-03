const express = require('express');
const router = express.Router();
const giraTecnicaController = require('../controllers/giraTecnicaController');

router.post('/', giraTecnicaController.create);
router.get('/', giraTecnicaController.findAll);
router.get('/:id', giraTecnicaController.findById);
router.put('/:id', giraTecnicaController.update);
router.delete('/:id', giraTecnicaController.delete);

module.exports = router;

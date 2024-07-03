const express = require('express');
const router = express.Router();
const participantesController = require('../controllers/participantesController');

router.post('/', participantesController.create);
router.get('/', participantesController.findAll);
router.get('/:id', participantesController.findById);
router.put('/:id', participantesController.update);
router.delete('/:id', participantesController.delete);

module.exports = router;

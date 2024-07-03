const express = require('express');
const router = express.Router();
const regionalesController = require('../controllers/regionalesController');

router.post('/', regionalesController.create);
router.get('/', regionalesController.findAll);
router.get('/:id', regionalesController.findById);
router.put('/:id', regionalesController.update);
router.delete('/:id', regionalesController.delete);

module.exports = router;
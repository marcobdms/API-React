const express = require('express')
const router = express.Router()
const fabricanteController = require('../controllers/fabricantes.controller');
// Retrieve all categorias
router.get('/', fabricanteController.findAll);
// Create a new employee
router.post('/', fabricanteController.create);
// Retrieve a single employee with id
router.get('/:id', fabricanteController.findById);
// Update a employee with id
router.put('/:id', fabricanteController.update);
// Delete a employee with id
router.delete('/:id', fabricanteController.delete);
module.exports = router
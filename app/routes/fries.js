const express = require('express');
const FriesController = require('../controllers/FriesController');

const router = express.Router();

router.get('/', FriesController.listall)
      .post('/', FriesController.create)
      .get('/:key/:value', FriesController.find, FriesController.show)
      .put('/:key/:value', FriesController.find, FriesController.update)
      .delete('/:key/:value', FriesController.find, FriesController.deleted)

module.exports = router;
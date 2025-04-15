const express = require('express');
const BurgerController = require('../controllers/BurgerController');

const router = express.Router();

router.get('/', BurgerController.listall)
      .post('/', BurgerController.create)
      .get('/:key/:value', BurgerController.find, BurgerController.show)
      .put('/:key/:value', BurgerController.find, BurgerController.update)
      .delete('/:key/:value', BurgerController.find, BurgerController.deleted)

module.exports = router;






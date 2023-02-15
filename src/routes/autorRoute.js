const express = require('express');
const autorController = require('../controllers/autorController');
const router = express.Router();


router.get('/:id', autorController.get);
router.post('/', autorController.create);
router.patch('/', autorController.update);

module.exports = router;
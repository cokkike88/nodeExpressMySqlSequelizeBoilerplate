const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.get('/:id', bookController.get);
router.post('/', bookController.create);
router.patch('/', bookController.update);

module.exports = router;
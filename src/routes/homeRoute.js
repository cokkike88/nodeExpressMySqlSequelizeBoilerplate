const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();


router.get('/', homeController.getHome);
router.get('/about', homeController.getAbout);

module.exports = router;
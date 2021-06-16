const express = require('express');
const router= express.Router();
const productController = require('../app/controllers/ProductController');

router.use('/:slug',productController.show);

module.exports = router;
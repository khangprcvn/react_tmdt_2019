const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/women/:pageSize/:pageNumber', productController.getWomenProduct);

router.get('/:id', productController.getOneProduct);

router.get('/list/seller', productController.getSellerProduct);

module.exports = router;
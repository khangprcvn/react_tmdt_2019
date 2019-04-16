const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/getWomenProduct/:pageSize/:pageNumber', productController.getWomenProduct);

router.post('/getDetailProduct/:id', productController.getOneProduct);

router.get('/getSellerProduct', productController.getSellerProduct);

module.exports = router;
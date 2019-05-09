const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const cartController = require('../controllers/cart');
router.get('/women/:pageSize/:pageNumber', productController.getWomenProduct);

router.get('/category/:name', productController.getCategoryProduct);

router.get('/brand/:id', productController.getBrandProduct);

router.get('/:id', productController.getOneProduct);

router.get('/list/seller', productController.getSellerProduct);

router.get('/list/product-sale', productController.getSaleProduct);

router.post('/list/cart', cartController.addOrderToList);

module.exports = router;
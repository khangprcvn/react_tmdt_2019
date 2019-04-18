const express = require('express');
const router = express.Router();
const multer = require('multer');
const UPLOAD_PATH = 'uploads';
const upload = multer({dest: `${UPLOAD_PATH}`});
const productController = require('../controllers/product');
const pathPage = ['/', '/product/addproduct'];
const path = require('path');

pathPage.forEach(route => router.get(route, (req, res) => {
  if (!req.session.passport || req.user.role !== 'admin') {
    req.logout();
    res.redirect('/login');
  } else {
    res.sendFile(path.join(__dirname, '../../../', './build/index.html'));
  }
}))


router.get('/products', productController.getAllProduct);

router.post('/products', upload.single('file'), productController.addProduct);

router.delete('/products/:id', productController.deleteProduct);


module.exports = router;
const path = require('path');
const express = require('express');
const router = express.Router();
const userContrl = require('../controllers/user');
const pathPage = ['/', '/login', '/signup', '/product/women', '/product/men', '/product/brand/:id', 
'/product/category/:name', '/product/cart', '/product/checkout', '/product/detail/:id', '/product/sale'
];


pathPage.forEach(route => router.get(route, (req, res) => {
  res.sendFile(path.join(__dirname, '../../../', './build/index.html'));
}))

router.get('/home/state', (req, res) => {
  if (!req.session.passport) {
    res.send({
      user: null
    })
  } else {
    res.send({
      user: req.user
    })
  }

})
router.post('/signup', userContrl.signUp);

router.post('/login', userContrl.logIn);

router.get('/logout', userContrl.logOut);

module.exports = router;
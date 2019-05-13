const Cart = require('../models/cart');

module.exports = {
  addOrderToList: (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
    const list = req.body.list;
    const total = req.body.total;
    Cart.create({
      name,
      address,
      email,
      phone,
      list,
      total
    }).then(order => {
      res.send(order);
    }).catch(err => {
      console.log(err);
    })
  },

  getAllOrder: (req, res) => {
    Cart.find().then(result => {
      res.send(result);
    }).catch(err => {
      console.log(err);
    })
  }
}
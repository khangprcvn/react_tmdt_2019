const Product = require('../models/product');

module.exports = {

  getAllProduct: (req, res) => {
    Product.find().then(result => {
      res.send(result);
    }).catch(err => {
      console.log(err);
    })
  },

  addProduct: (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const sale = req.body.sale;
    const amount = req.body.amount;
    const quantity = 1;
    const information = req.body.information;
    const ingredient = req.body.ingredient;
    const brand = req.body.brand.toLowerCase();
    const sex = req.body.sex === 'Female' ? true : false;
    const category = Product.changeAlias(req.body.category);
    const logo = req.body.logo;
    Product.create({
      name,
      price,
      sale,
      amount,
      quantity,
      information,
      ingredient,
      brand,
      sex,
      category,
      logo
    }).then(product => {
      // console.log(product);
      res.send(product);
    }).catch(err => {
      console.log(err);
    })
  },
  deleteProduct: (req, res) => {
    const _id = req.params.id;
    Product.deleteOne({
      _id
    }).then(result => {
      res.send(result);
    }).catch(err => {
      console.log(err);
    })
  },

  getOneProduct: (req, res) => {
    const _id = req.params.id;
    Product.findOne({
      _id
    }, {}).then(product => {
      res.send(product);
    }).catch(err => {
      console.log(err);
    })
  },

  getSellerProduct: (req, res) => {
    Product.find().then(result => {
      let product = result.filter(res => res.price > 200000 && res.price <= 600000);
      res.send(product);
    }).catch(err => {
      console.log(err);
    })
  },

  getWomenProduct: (req, res) => {
    const pageSize = parseInt(req.params.pageSize);
    const pageNumber = parseInt(req.params.pageNumber);
    const condition = {
      sex: true
    }
    Product.getProductPage(pageNumber, pageSize, condition, (error, data) => {
      res.send({
        error,
        data
      })
    });
  },

  getCategoryProduct: (req, res) => {
    const category = req.params.name;
    Product.find({
      category
    }).then(result => {
      res.send(result)
    }).catch(error => {
      console.log(error)
    })
  },

  getBrandProduct: (req, res) => {
    const brand = req.params.id;
    Product.find({
      brand
    }).then(result => {
      res.send(result)
    }).catch(error => {
      console.log(error)
    })
  },

  getSaleProduct: (req, res) => {
    Product.find({
      sale: {
        $gt: 0
      }
    }).then(result => {
      res.send(result)
    }).catch(error => {
      console.log(error)
    })
  }

}
const Product = require('../models/product');
const fs = require('fs');

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
    const amount = req.body.amount;
    const quantity = 1;
    const information = req.body.information;
    const ingredient = req.body.ingredient;
    const brand = req.body.brand.toLowerCase();
    const sex = req.body.sex;
    const pathPicture = req.file.path;
    const bufferPicture = fs.readFileSync(pathPicture);
    const dataPicture = bufferPicture.toString('base64');
    const namePicture = req.file.originalname;
    const newPicture = `data:${req.file.mimetype};base64,` + dataPicture;
    const picture = {
      namePicture,
      dataPicture: newPicture
    }
    Product.create({
      name,
      price,
      amount,
      quantity,
      information,
      ingredient,
      brand,
      sex,
      picture
    }).then(product => {
      // console.log(product);
      res.send(product);
    }).catch(err => {
      console.log(err);
    })
  },
  deleteProduct: (req, res) => {
    const _id = req.body.id;
    Product.deleteOne({
      _id
    }).then(result => {
      // console.log(result);
      res.send(result);
    }).catch(err => {
      console.log(err);
    })
  },

  getOneProduct: (req, res) => {
    const _id = req.body.id;
    Product.findOne({
      _id
    }, {}).then(product => {
      // console.log(product);
      res.send(product);
    }).catch(err => {
      console.log(err);
    })
  },

  getSellerProduct: (req, res) => {
    Product.find({}).then(product => {
      let result = product.filter(product => {
        return product.price > 200000 && product.price <= 600000
      })
      res.send(result);
    }).catch(err => {
      console.log(err);
    })
  },

  // getWomenProduct: (req, res) => {
  //   Product.find({
  //     sex: false
  //   }).then(result => {
  //     res.send(result)
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }
  getWomenProduct: (req, res) => {
    const pageSize = parseInt(req.params.pageSize);
    const pageNumber = parseInt(req.params.pageNumber);
    // console.log(pageSize, pageNumber)
    const result = Product.skipLimitProduct(pageSize, pageNumber);
    result.then(pro => {
      res.send(pro);
    }).catch(err => {
      console.log(err)
    })
  }
}
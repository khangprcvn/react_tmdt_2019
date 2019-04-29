const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
    max: 20
  },
  amount: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number,
    required: true
  },
  information: {
    type: String,
    require: true
  },
  ingredient: {
    type: String,
    require: true
  },
  category: {
    type: Boolean,
    require: true
  },
  sex: {
    type: Boolean,
    require: true
  },
  brand: {
    type: String,
    require: true
  },
  sale: {
    type: Number
  },
  logo: String
});

const Product = module.exports = mongoose.model('products', productSchema);

module.exports.skipLimitProduct = (condition, pageSize, pageNumber) => {
  let skips = pageSize * (pageNumber - 1);
  let cursor = Product.find(condition).skip(skips).limit(pageSize);
  return cursor;
}
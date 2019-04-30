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

// module.exports.skipLimitProduct = (condition, pageSize, pageNumber) => {
//   let skips = pageSize * (pageNumber - 1);
//   let cursor = Product.find(condition).skip(skips).limit(pageSize);
//   return cursor;
// }

module.exports.getProductPage = (pageSize, pageNumber, condition, done) => {
  Product.find(condition).countDocuments({}, (error, totalItem) => {
    if (error) {
      done(error)
    } else {
      let result = {
        totalItem,
        pageSize,
        pageTotal: Math.ceil(totalItem / pageSize)
      };
      result.pageNumber = pageNumber === -1 ? result.pageTotal : Math.min(pageNumber, result.pageTotal);
      const skipNumber = (result.pageNumber > 0 ? result.pageNumber - 1 : 0) * result.pageSize;
      Product.find(condition).skip(skipNumber).limit(result.pageSize).exec((error, items) => {
        result.list = error ? [] : items;
        done(error, result);
      })
    }
  })
}
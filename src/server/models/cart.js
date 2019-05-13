const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  
  address: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: Number,
    required: true
  },

  list: {
    type: Array,
    required: true
  },
  total: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('carts', cartSchema);
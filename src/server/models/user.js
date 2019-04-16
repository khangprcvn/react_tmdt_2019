const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true,
    max: 20
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('users', userSchema);
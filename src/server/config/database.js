module.exports = {
  // Set up mongoose connection
  connectToServer: () => {
    const mongoose = require('mongoose');
    const URI = "mongodb+srv://khangprcvn:tmdt123@cluster0-c0j5d.mongodb.net/Product_DB?retryWrites=true";
    const mongoDB = process.env.MONGODB_URI || URI;
    mongoose.connect(mongoDB, {
      useNewUrlParser: true
    });
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }
};
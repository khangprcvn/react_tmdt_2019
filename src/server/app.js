const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const compression = require('compression');

require('../server/config/passport')(passport);

const MONGODB_URI =
  'mongodb+srv://khangprcvn:tmdt123@cluster0-c0j5d.mongodb.net/Product_DB';

app.use(express.static(path.join(__dirname, '../../', 'public')));
app.use(express.static(path.join(__dirname, '../../', 'build')));


app.use(bodyParser.urlencoded({
  extended: false,
  limit: '50mb'
}));
app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(cookieParser());
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
  })
);

// passport midleware
app.use(passport.initialize());
app.use(passport.session());

app.use(compression());

const userView = require('./routes/home');
app.use('/', userView);

const adminView = require('./routes/admin');
app.use('/admin', adminView);

const productView = require('./routes/product');
app.use('/products', productView);

// app.listen(process.env.PORT || 5000, () => console.log('server listen port: 5000'));

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true
  })
  .then(result => {
    app.listen(process.env.PORT || 5000);
    console.log('Node server running on port 5000');  
  })
  .catch(err => {
    console.log(err);
  });
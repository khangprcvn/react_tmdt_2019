const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const passport = require('passport');


require('../server/config/passport')(passport);

// connect database
const database = require('./config/database');
database.connectToServer();

app.use(express.static(path.join(__dirname, '../../', 'public')));
app.use(express.static(path.join(__dirname, '../../', 'build')));


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

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

// app.use(flash());

// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   next();
// })



// app.use(session({
//   key: 'user_id',
//   secret: 'secret',
//   saveUninitialized: false,
//   resave: false,
//   cookie: {
//     expires: 600000
//   }
// }));


const userView = require('./routes/home');
app.use('/', userView);

const adminView = require('./routes/admin');
app.use('/admin', adminView);

const productView = require('./routes/product');
app.use('/product', productView);

app.listen(5000, () => console.log('server listen port: 5000'));
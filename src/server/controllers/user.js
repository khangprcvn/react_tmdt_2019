const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');
module.exports = {
  // signUp: (req, res) => {
  //   const name = req.body.name;
  //   const username = req.body.username;
  //   const email = req.body.email;
  //   const password = req.body.password;
  //   const confirmPass = req.body.confirmPass;
  //   if (password === confirmPass) {
  //     const hashPassword = bcrypt.hash(password, 10);
  //     hashPassword.then(password => {
  //       User.create({
  //         name,
  //         username,
  //         email,
  //         password,
  //       }).then(user => {
  //         req.session.user = user._id;
  //         res.send(user)
  //       }).catch(err => {
  //         res.send('Error');
  //       })
  //     }).catch(err => {
  //       console.log(err);
  //     })
  //   }
  // },

  signUp: (req, res) => {
    const { name, email, password } = req.body;
    const username = req.body.username.toLowerCase();
    User.findOne({
      username: username
    }).then(user => {
      if (user) {
        res.send({msg: "username already exists"});
      } else {
        const newUser = new User({
          name,
          username,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                // console.log(user);
                res.send(user);
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  },

  logIn: (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (info) return res.send(info);
      req.logIn(user, err => {
        if (err) return next(err);
        return res.send(user);
      });
    })(req, res, next);
  },

  logOut: (req, res) => {
    req.logout();
    res.redirect('/login');
  }

  // logIn: (req, res) => {
  //   const username = req.body.username;
  //   const password = req.body.password;
  //   // check username and password in database
  //   User.findOne({
  //     username
  //   }).then(user => {
  //     bcrypt.compare(password, user.password, (err, result) => {
  //       if (result) {
  //         req.session.user = user;
  //         res.send(user);
  //       } else {
  //         res.redirect('/login');
  //       }
  //     })
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // },

  // logout: (req, res) => {
  //   // console.log(req.session.user);
  //   if (req.cookies.user_id && req.session.user) {
  //     res.clearCookie('user_id');
  //     res.redirect('/');
  //   } else {
  //     res.send('Not OK');
  //   }
  // }
};

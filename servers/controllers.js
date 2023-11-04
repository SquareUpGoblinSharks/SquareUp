const User = require('./models');
const bcrypt = require('bcryptjs');

const Controller = {};

// insert another middleware here to to retrive info from database and display

Controller.getProfile = (req, res, next) => {
  models.Profiles.find({})
    .exec()
    .then((data) => {
      console.log('FINDING USER DATA:', data);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error in controller.getProfile middleware',
        message: {
          err: 'there was an error grabbing profile data',
        },
      });
    });
};

Controller.updateProfile = (req, res, next) => {};

Controller.createUser = (req, res, next) => {
  const {
    name,
    username,
    password,
    profilePicture,
    sex,
    height,
    weight,
    fightingStyle,
    totalWins,
    totalLosses,
  } = req.body;

  models.Profiles.create({
    name,
    username,
    password,
    profilePicture,
    sex,
    height,
    weight,
    fightingStyle,
    totalWins,
    totalLosses,
  })
    .exec()
    .then((data) => {
      console.log('DATA', data);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error in controller.createProfile middleware',
        message: {
          err: 'There was an error when creating your profile',
          status: 500,
        },
      });
    });
};

Controllers.getProfile = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        res.status(401);
        return res.redirect('./signup');
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.log('Error verifying user', err);
          return next(err);
        }
        if (!isMatch) {
          res.status(401);
          return res.redirect('/signup');
        }
        res.redirect('./secret');
        return next();
      });
    })
    .catch((err) => {
      console.log('Error verifying user', err);
      next(err);
    });
};

module.exports = Controller;

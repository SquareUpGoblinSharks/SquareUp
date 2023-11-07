const Profiles = require('./models');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const Controller = {};

// insert another middleware here to to retrive info from database and display
//gets all profiles in the mongodb
Controller.getProfile = (req, res, next) => {
  const profileSize = 30;
  console.log('test');
  Profiles.aggregate([{ $sample: { size: profileSize } }])
    .exec()
    .then((data) => {
      res.locals.profiles = data;
      // console.log('FINDING USER DATA:', data);
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

//controls that update wins and losses in the two sparring partners.
Controller.updateWinsLosses = (req, res, next) => {
  const { username, opponent, win } = req.body;

  Profiles.findOne({ username: username })
    .exec()
    .then((data) => {
      if (win) {
        data.totalWins += 1;
      } else {
        data.totalLosses += 1;
      }
      return data.save();
    })
    .catch((err) => {
      return next({
        log: 'Error in updating updateWinsandLosses in controllers',
        message: {
          err: 'there was an error in updating wins and losses',
        },
      });
    });

  Profiles.findOne({ username: opponent })
    .exec()
    .then((opponent) => {
      if (win) {
        opponent.totalLosses += 1;
      } else {
        opponent.totalWins += 1;
      }
      return data.save();
    })
    .catch((err) => {
      return next({
        log: 'Error in updating updateWinsandLosses in controllers',
        message: {
          err: 'there was an error in updating wins and losses',
        },
      });
    });
};

Controller.createUser = (req, res, next) => {
  console.log('REQUESTBODY', req.body);
  const {
    name,
    username,
    password,
    sex,
    height,
    weight,
    fightingStyle,
  } = req.body;

  Profiles.create({
    name,
    username,
    password,
    profilePicture: 'none',
    sex,
    height,
    weight,
    fightingStyle,
    wins: [],
    loss: [],
    totalWins: 0,
    totalLosses: 0,
  })
    .then((data) => {
      // console.log('DATA', data);
      res.locals.user = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in controller.createProfile middleware: ${err}`,
        message: {
          err: 'There was an error when creating your profile',
          status: 500,
        },
      });
    });
};

Controller.addProfilePicture = (req, res, next) => {
  console.log(req.file)
}

Controller.verifyUser = (req, res, next) => {
  // console.log('TESTING');
  const { username, password } = req.body;
  Profiles.findOne({ username: username, password: password })
    .then((user) => {
      if (!user) {
        res.status(401);
        // return res.redirect('/signup');
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.log('Error verifying user', err);
          return next(err);
        }
        if (!isMatch) {
          res.status(401);
          // return res.redirect('/signup');
        }
        // console.log('user', user);
        res.locals.userInfo = user;
        return next();
      });
    })
    .catch((err) => {
      console.log('Error verifying user', err);
      next(err);
    });
};

module.exports = Controller;

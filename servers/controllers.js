const { Profiles } = require('./models');
const bcrypt = require('bcryptjs');

const Controller = {};

// insert another middleware here to to retrive info from database and display
//gets all profiles in the mongodb
Controller.getProfile = (req, res, next) => {
  const profileSize = 30;

  Profiles.aggregate([{ $sample: { size: profileSize } }])
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

//controls that update wins and losses in the two sparring partners.
Controller.updateWinsLosses = (req, res, next) => {
  const { username, opponent, win } = req.body;

  Profiles.findOne({ username: username })
    .exec()
    .then((data) => {
      if (win) {
        data.totalWins += 1;
      } else {
        data.totalLossesloss += 1;
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

  Profiles.create({
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
  Profiles.findOne({ username: username })
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

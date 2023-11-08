const Profiles = require('../models/models');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const Controller = {};

// insert another middleware here to to retrive info from database and display
//gets all profiles in the mongodb
Controller.getProfile = (req, res, next) => {
  const profileSize = 30;
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
  // console.log('REQUESTBODY❤️❤️❤️❤️❤️', req.body);
  const {
    name,
    username,
    password,
    sex,
    height,
    age,
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
    age,
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

Controller.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({
      log: "Missing username or password in controller.verifyUser",
      status: 400,
      message: { error: "Username and/or password cannot be empty" },
    });
  }
  try {
    const user = await Profiles.findOne({ username });

    if (!user) {
      return next({
        log: "User does not exist in controller.verifyUser",
        status: 400,
        message: { error: "Username and/or password are incorrect" },
      });
    } else {
      
      const result = await bcrypt.compare(password, user.password);
      if (!result) {
        return next({
          log: "Password does not match controller.verifyUser",
          status: 400,
          message: { error: "Username and/or password are incorrect" },
        });
      } else {
        res.locals.userInfo = user; 
        res.locals._id = user._id;
        console.log(user._id);
        return next();
      }
    }
  } catch (err) {
    return next({
      log: `An error occurred in controller.verifyUser: ${err}`,
      status: 500,
      message: { err: `An error occurred` },
    });
  }
};

Controller.updateUser = async (req, res, next) => {
  const {
    username,
    name,
    sex,
    height,
    weight,
    age,
    fightingStyle,
  } = req.body;
  try{
    const search = await Profiles.findOne({username: username});
    if(search){
      search.name = name;
      search.sex = sex;
      search.height = height;
      search.weight = weight;
      search.age = age;
      search.fightingStyle = fightingStyle;
      await search.save();
      return next();
    }
    else {
      console.log('No such user');
      return next();
    }
  }
  catch (err) {
    return next({
      log: 'An error occured in userController.updateUser',
      message: 'update failed'
    })
  }
}
module.exports = Controller;

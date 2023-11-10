const Profiles = require('../models/models');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Controller = {};

// insert another middleware here to to retrive info from database and display
//gets all profiles in the mongodb
Controller.getProfile = (req, res, next) => {
  const profileSize = 300;
  Profiles //.aggregate([{ $sample: { size: profileSize } }])
    .find()
    .exec()
    .then((data) => {
      res.locals.profiles = data;
      // console.log('Count USER DATA:', data.length);
      return next();
    })
    .catch((err) => {
      return next({
        log: `Controller.getProfile: Error in middleware: ${err}`,
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
        log: `Controller.updateWinsLosses: Error in updating: ${err}`,
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
        log: `Controller.updateWinsLosses: Error in updating: ${err}`,
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
        log: `Controller.createUser: Error in creatingUser: ${err}`,
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
      log: "Controller.verifyUser: Missing username or password",
      status: 400,
      message: { error: "Username and/or password cannot be empty" },
    });
  }
  try {
    const user = await Profiles.findOne({ username });

    if (!user) {
      return next({
        log: "Controller.verifyUser: User does not exist",
        status: 400,
        message: { error: "Username and/or password are incorrect" },
      });
    } else {
      console.log(password, user.password)
      const result = await bcrypt.compare(password, user.password);
      if (!result) {
        return next({
          log: "Controller.verifyUser: Password does not match controller",
          status: 400,
          message: { error: "Username and/or password are incorrect" },
        });
      } else {
        res.locals.userInfo = user; 
        res.locals._id = user._id;
        // console.log(user._id);
        return next();
      }
    }
  } catch (err) {
    return next({
      log: `Controller.verifyUser: An error occurred in controller.verifyUser: ${err}`,
      status: 500,
      message: { err: `An error occurred` },
    });
  }
};

Controller.updateUser = async (req, res, next) => {
  const token = req.cookies.ssid;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const acceptedKeys = ['name', 'sex', 'height', 'weight', 'age', 'fightingStyle', 'location'];
  const nonEmptyBodies = Object.fromEntries(Object.entries(req.body).filter(([k,v]) => {v.length > 0 && v !== null && acceptedKeys.includes(k)}))
  
  try{
    const search = await Profiles.findById(decoded.id, nonEmptyBodies, {});
    if(search){
      return next();
    }
    else {
      console.log('No such user');
      return next();
    }
  }
  catch (err) {
    return next({
      log: `Controller.updateUser: An error occured: ${err}`,
      message: { err: `update failed` }
    })
  }
}

Controller.verifyCookie = async (req, res, next) => {
  try {
    const token = req.cookies.ssid;
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const search = await Profiles.findById(decoded.id);
    const response = {};
    if(search) {
      response.verified = true;
      response.data = search;
    }
    else {
      response.verified = false;
      response.data = null;
      res.clearCookie('ssid');
    }
    res.locals.response = response;
    return next();
  }
  catch(err){
    return next({
      log: `Controller.verifyCookie: An error occured: ${err}`,
      message: { err: `cookie not verified` }
    });
  }
}

Controller.deleteUser = async (req, res, next) => {
  const { username } = req.body;
  try {
    const result = await Profiles.deleteOne({ username: username });
    if (result.deletedCount === 0) {
      return next({
        log: "User does not exist",
        status: 400,
        message: { error: "Failed to delete user" },
      });
    }
    return next();
  } catch (err) {
    return next({
      log: `An error occurred in controller.DeleteUser: ${err}`,
      status: 500,
      message: { err: `You have deleted reality. Goodbye.` },
    });
  }
};

Controller.getUser = async (req, res, next) => {
  const { username } = req.body;
  try {
    const result = await Profiles.findOne({ username: username });
    if (!result) {
      return next({
        log: "User does not exist",
        status: 400,
        message: { error: "Failed to retrieve user" },
      });
    }
    res.locals.userInfo = result;
    return next();
  } catch (err) {
    return next({
      log: `An error occurred in controller.getUser: ${err}`,
      status: 500,
      message: { err: `GET good` },
    });
  }
};
module.exports = Controller;

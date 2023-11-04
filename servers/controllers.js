const models = require('./models');

const controllers = {};

controllers.createProfile = (req, res, next) => {
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

controllers.getProfile = (req, res, next) => {};

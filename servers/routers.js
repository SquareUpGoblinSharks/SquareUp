const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

module.exports = router;

//mongodb
router.get('/');
//posting to the database for a new profile
router.post('/', contollers.createProfile, (req, res) => {
  res.status(200).json(res.locals.newProfile);
});



router.update();

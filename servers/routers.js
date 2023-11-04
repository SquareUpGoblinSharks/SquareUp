const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

module.exports = router;

router.get();

router.post('/', controllers.createProfile, (req, res) => {
  res.status(200).json(res.locals.newProfile);
});

router.update();

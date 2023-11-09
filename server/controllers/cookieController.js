const cookieController = {};
const Profiles = require('../models/models.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  if(res.locals.verify == false) return next();
  console.log('baking cookies...')
  // console.log(res.locals.newUser);
  try{
    const token = jwt.sign({id: res.locals._id}, process.env.JWT_SECRET, {expiresIn: '1hr'} )
    // console.log(id);
    res.cookie('ssid', token, {
      httpOnly: false,
      secure: true,
    });
    return next();
  }
  catch(err){
    console.error('someone ate the cookies')
    return next(err);
  }
}

module.exports = cookieController;

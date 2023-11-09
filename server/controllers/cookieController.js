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
    // console.log(id);
    res.cookie('ssid', res.locals.token, {
      httpOnly: false,
      secure: true,
    });
    return next();
  }
  catch(err){
    console.error('someone ate the cookies')
    return next({
      log: `cookieController.setSSIDCookie: An error occured: ${err}`,
      message: { err: `cookieUpdateFailed` }
    });
  }
}


cookieController.produceJWT = (req, res, next ) => {
// write code here
if(res.locals.verify == false) return next();
try{
  const token = jwt.sign({id: res.locals._id}, process.env.JWT_SECRET, {expiresIn: '1hr'} )
  // console.log(id);
  res.locals.token = token;
  return next();
}
catch(err){
  return next({
    log: `cookieController.produceJWT: An error occured: ${err}`,
    message: { err: `cookieUpdateFailed` }
  });
}

};

module.exports = cookieController;

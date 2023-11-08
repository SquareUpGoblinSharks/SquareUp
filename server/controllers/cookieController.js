const cookieController = {};
const Profiles = require('../models/models.js');

cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  if(res.locals.verify == false) return next();
  console.log('baking cookies...')
  // console.log(res.locals.newUser);
  const id = res.locals._id;
  try{
    // console.log(id);
    res.cookie('ssid', id, {
      httpOnly: true,
      secure: true,
    });
    return next();
  }
  catch(err){
    return next({
      log: 'An error occured in cookieController.setSSIDCookie',
      message: 'someone ate the cookies'
    })
  }
}

module.exports = cookieController;

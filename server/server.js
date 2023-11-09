const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Controller = require('./controllers/controllers');
const cookieController = require('./controllers/cookieController');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

//checking
const PORT = 8000;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
   credentials: true,
}));
// this is temporary, insert real url later
// created in models.js so not needed here
// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/SquareUp' : 'mongodb://localhost/SquareUp';
// mongoose.connect(mongoURI);

// automatically parse url encoded body content and form data rom incoming requrests and place it in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/client', express.static(path.resolve(__dirname, '../client')));

/** Profile picture upload endpoints */
// app.post(
  //   '/profile_picture',
  //   upload.single('profilePicture'),
  //   Controller.addProfilePicture,
  //   (req, res) => {
    //     console.log(req.file, req.body);
    //     res.status(200).json(req.file);
    //   }
    // );
    // app.get('/profile_picture', (req, res) => {
      //   res.status(200).sendFile(path.join(__dirname, '../public/1699313229211.png'));
      // });
      
      //on render for the root get all profiles, right now set to 30 random profiles
      //Test is the homepage
      
      app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/index.html'));
      });
      
      // signup
      // redirect to the sign up page when a sign up button gets pushed
      app.get('/signup', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/signup.jsx'));
      });
      
      // this is for after you enter your information
      // creates user and then redirects them to the homepage
      app.post('/signup', Controller.createUser, Controller.verifyUser, cookieController.setSSIDCookie, (req, res) => {
        // console.log('res.cookies from signup', res.locals.cookies);
        res.status(200).json(res.locals.user);
      });
      
      // login
      app.post('/login', Controller.verifyUser, cookieController.setSSIDCookie, (req, res) => {
        // console.log('cookies from login ', res.locals.cookies);
        console.log(req.cookies);
        res.status(200).json(res.locals.userInfo);
      });

      app.get('/verifyCookie', Controller.verifyCookie, (req, res) => {
        res.status(200).json(res.locals.response);
      });

      app.get('/Leaderboard', Controller.getProfile, (req, res) => {
        // console.log('testing get route');
        res.status(200).json(res.locals.profiles);
      });
      app.get('/secret', (req, res) => {
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      })

      app.get('/logout', (req, res) => {
        console.log('clearing cookies...')
        res.status(200).clearCookie('ssid');
      })
      app.patch('/editProfile', Controller.updateUser, (req, res) => {
        console.log('update request completed');
        res.status(200).json();
      })
      // error handling
      app.use((req, res) => {
        res.status(404).send('Not Found');
      });
      
      app.use((err, req, res, next) => {
        console.log('global error', err); 
        res.status(500).send(JSON.stringify(err.error));
      });
        
        app.listen(PORT, () => {
          console.log(`Listening on port ${PORT}...`);
        });
        
        module.exports = app;

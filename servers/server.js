const express = require('express');
const path = require('path');

const mongoose = require('mongoose');

const Controller = require('./controllers')

const PORT = 3000;

const app = express();

const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/SquareUp' : 'mongodb://localhost/SquareUp';
mongoose.connect(mongoURI);

// automatically parse url encoded body content and form data rom incoming requrests and place it in req.body
app.use(express.json());
app.use(express.urlencoded());

app.use('./client', express.static(path.resolve(__dirname, '../client')));

// express routes

// root
app.get('./', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// signup
// redirect to the sign up page when a sign up button gets pushed
app.get('./signup', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/signup.html'));
});

// this is for after you enter your information
// creates user and then redirects them to the homepage
app.post('./signup', Controller.createUser, (req, res) => {
    res.status(200)
    res.redirect('/index.html')
})

// login
app.post('./login', Controller.verifyUser, (req, res) => {
    res.status(200)
    res.redirect('./index.html')
})

// error handling
app.use((req, res) => {
    res.status(404).send('Not Found');
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
  });
  
app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

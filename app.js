// BASE MODULES
// ==============================================
var fs = require('fs');
var path = require('path');
var express = require('express');
var app     = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');

// ROUTES
// ==============================================
var login = require('./server/routes/login');
var blog = require('./server/routes/blog');

// Support json encoded bodies
app.use(bodyParser.json());

// Support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//Support Cookie
app.use(cookieParser());

//Support Validatin
app.use(expressValidator());

//Support Static files
app.set('views', path.join(__dirname, 'public/views'));
app.use('/img',express.static(path.join(__dirname, 'public/images')));
app.use('/js',express.static(path.join(__dirname, 'public/libs')));
app.use('/css',express.static(path.join(__dirname, 'public/css')));

app.locals.loginMsg = 'Please enter Email and Password';

// Run Router
app.use('/', login);
app.use('/', blog);

module.exports = app;

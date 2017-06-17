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

var allowCrossDomain = (req, res, next)=> {
    if ('OPTIONS' == req.method) {
        res.header('Access-Control-Allow-Origin', 'www.netleaders.com');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.sendStatus(200);
    }
    else {
        res.header('Access-Control-Allow-Origin', 'www.netleaders.com');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        next();
    }
};

app.use(allowCrossDomain);

// Support json encoded bodies
app.use(bodyParser.json());

// Support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//Support Cookie
app.use(cookieParser());

//Support Validatin
app.use(expressValidator());

//Support Static files
app.set('views', express.static(path.join(__dirname, 'client/public/views')));

app.use("/client", express.static('client'));
app.use("/node_modules", express.static('node_modules'));

app.use('/built', express.static(path.join(__dirname, 'client/built')));
app.use('/img', express.static(path.join(__dirname, 'client/public/images')));
app.use('/js', express.static(path.join(__dirname, 'client/public/libs')));
app.use('/css', express.static(path.join(__dirname, 'client/public/css')));

app.locals.loginMsg = 'Please enter Email and Password';

// Run Router
app.use('/', login);
app.use('/', blog);

module.exports = app;

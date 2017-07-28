var config = require('./config/development');

// BASE MODULES
// ==============================================
var fs      = require('fs'),
    path    = require('path'),
    express = require('express'),
    app     = express();

var bodyParser       = require('body-parser'),
    cookieParser     = require('cookie-parser'),
    expressValidator = require('express-validator');

// DATABASE MODULES
// ==============================================
var mongoose = require('mongoose');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoDB.uri, (err)=> {
        if(err) console.log(err);
    });

// ROUTES
// ==============================================
var index   = require('./server/routes/index'),
    login   = require('./server/routes/login'),
    pages   = require('./server/routes/pages'),
    blog    = require('./server/routes/blog'),
    menius  = require('./server/routes/menius');

var allowCrossDomain = (req, res, next)=> {
    if ('OPTIONS' == req.method) {
        res.header('Access-Control-Allow-Origin', 'www.localhost:8888');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.sendStatus(200);
    }
    else {
        res.header('Access-Control-Allow-Origin', 'www.localhost:8888');
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
app.set('views', express.static(path.join(__dirname, '../client/public/views')));

app.use("/client", express.static('client'));
app.use("/node_modules", express.static('node_modules'));

app.use('/built', express.static(path.join(__dirname, 'client/built')));
app.use('/templates', express.static(path.join(__dirname, 'client/public/templates')));
app.use('/images', express.static(path.join(__dirname, 'client/public/assets/images')));
app.use('/data', express.static(path.join(__dirname, 'client/app/shared/data')))
app.use('/js', express.static(path.join(__dirname, 'client/public/libs')));
app.use('/css', express.static(path.join(__dirname, 'client/public/css')));

// Run Router
app.use('/',    index);
app.use('/api', login);
app.use('/api', pages)
app.use('/api', blog);
app.use('/api', menius);

module.exports = app;

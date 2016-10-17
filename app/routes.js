var db = require('./connectionDB');
var path = require('path');
//var ejs = require('ejs');
//var bodyParser = require('body-parser');

// BASE SETUP
// ==============================================
var http = require('http');
var express = require('express');
var app     = express();
var port    = process.env.PORT || 8888;

// ROUTES
// ==============================================

// Instance Router
var router = express.Router();

router.get('/post/:id', function(req, res) {
	var post_id = req.params.id;
	//var post_url = path.join(__dirname, 'templates');
	//console.log(post_url);

	db.query('SELECT * FROM post WHERE post_id="' + post_id + '"' , function(error, rows, fields) {
		res.render('post.ejs', {title: rows[0].post_name});

		//res.send('This is ' + rows[0].post_name + ' post!');
		console.log(JSON.stringify(rows));
    });
});

// Run Router
app.use('/', router);

http.createServer(app).listen(port);
console.log("Server is now running...");

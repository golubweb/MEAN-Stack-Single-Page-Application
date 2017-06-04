// CONNECTION DATA BASE
// ==============================================
var db = require('../../connectionDB');
var app = require('../../app');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	console.log('USAO JE');

	res.render('login.ejs');
});

router.post('/logout', function(req, res){
	if(req.method == 'POST') {
		//res.clearCookie('userHash');
		res.redirect('/');
		res.end();
	} else {
		res.end();
	}
});

router.post('/login-user', function(req, res) {
	if(req.method == 'POST') {
		console.log(req.body);

		var email = req.body.user_email;
		var pass = req.body.user_pass;

		//req.checkBody('email', 'Name is required').notEmpty();

		var errorValid = req.validationErrors();
		//console.log(errorValid);

		if(email !== false && pass !== false) {
			db.query('SELECT user_id, user_name, user_email, user_hash FROM users WHERE user_email="'+ email +'" AND user_password="'+ pass +'" AND user_stats="1"', function(error, rows, fields){
				var data = rows;

				if(Object.keys(rows).length > 0) {
					console.log('user_hash: ', data[0].user_hash);

					//var s = JSON.stringify(req.session);
					//res.cookie('userHash', data.admin_hash, {maxAge: 1000});
					//res.clearCookie('userHash');

					res.render('admin.ejs', {info: data});
					res.end();
				} else {
					app.locals.loginMsg = 'Email or Password is incorrect!';
					res.redirect('/login');
					res.end();
				}
			});
		}
	} else {
		console.log('Is not Post Method');
		res.end();
	}
});

module.exports = router;

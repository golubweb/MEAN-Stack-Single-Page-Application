"use strict";

var app = require('../../app');

var express = require('express');
var router = express.Router();

const login = require('../function/db/login');
var loginDB = new login();

router.get('/', (req, res) => {
	res.render('login.ejs');
});

router.post('/logout', function(req, res){
	if(req.method == 'POST') {

		res.redirect('/');
		res.end();
	} else {
		res.end();
	}
});

router.post('/user-panel', (req, res) => {
	if(req.method == 'POST') {
		var email = req.body.user_email;
		var pass = req.body.user_pass;

		if(email !== false && pass !== false) {
			loginDB.getUserData(email, pass).then((data) => {
				if(Object.keys(data).length > 0) {
					res.render('admin.ejs', {info: data});
					res.end();
				} else {
					app.locals.loginMsg = 'Email or Password is incorrect!';
					res.redirect('/login');
					res.end();
				}
			});
		} else {
			res.end();
		}
	} else {
		console.log('Is not Post Method');
		res.end();
	}
});

module.exports = router;

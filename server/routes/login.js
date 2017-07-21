"use strict";

var app = require('../../app');

var express = require('express');
var router = express.Router();

var checkUserToken = require('../function/middleware/authenticated');
var generateToken = require('../function/middleware/generate-token');

const login = require('../function/db/login');
var loginDB = new login();

router.post('/logout', (req, res) => {
	res.clearCookie('token');
	res.redirect('/');
	res.end();
});

router.post('/user-panel', generateToken, (req, res) => {
	res.redirect('/');
	res.end();
});

module.exports = router;

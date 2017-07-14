"use strict";

var app = require('../../app');
var path = require("path");

var express = require('express');
var router = express.Router();

var checkUserToken = require('../function/middleware/authenticated');
var generateToken = require('../function/middleware/generate-token');

const login = require('../function/db/login');
var loginDB = new login();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/../../client/index.html'));
});

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

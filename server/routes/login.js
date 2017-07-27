"use strict";

const app = require('../../app');

const express = require('express');
const router  = express.Router();

const generateToken  = require('../function/middleware/generate-token');
const checkUserToken = require('../function/middleware/authenticated');

const login = require('../function/db/login');
const loginDB = new login();

router.post('/login', generateToken);

router.post('/authenticated', checkUserToken, (req, res) => {
    let token = req.body.token;

    res.json({ success: true, token: token });
	res.end();
});

module.exports = router;

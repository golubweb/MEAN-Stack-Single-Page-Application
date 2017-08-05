"use strict";

const app = require('../../app');

const express  = require('express'),
      router   = express.Router();

const generateToken  = require('../function/middleware/generate-token');
const checkUserToken = require('../function/middleware/authenticated');

const User = require('../function/mongoDB/users');
const userDB = new User();

router.post('/register', (req, res) => {
    userDB.addUser(req.body).then(data => {
        if(data.success)
            res.json({ success: true, msg: 'User is registerd!' });
        else
            res.json({ success: false, msg: 'Failed to register user!' });
    });
});

router.post('/login', (req, res) => {
    generateToken(userDB, req, res);
});

router.post('/authenticated', checkUserToken, (req, res) => {
    let token = req.body.token;

    res.json({ success: true, token: token });
	res.end();
});

module.exports = router;

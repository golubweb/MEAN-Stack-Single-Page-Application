"use strict";

const app = require('../../app'),
      router  = require('express').Router();

const Joi = require('joi'),
      registerAuthor = require('../function/middleware/validation/register-author'),
      loginAuthor    = require('../function/middleware/validation/login-author');

const generateToken  = require('../function/middleware/generate-token'),
      checkUserToken = require('../function/middleware/authenticated');

const User = require('../function/mongoDB/users'),
      userDB = new User();

router.post('/register', (req, res) => {
    Joi.validate(req.body, registerAuthor, (err, validator) => {
        if(!err)
            userDB.saveAuthor(req.body).then(data => {
                if(data.success)
                    res.json({ success: true, msg: 'User is registerd!' });
                else
                    res.json({ success: false, msg: 'Failed to register user!' });
            });
        else
            res.json({ success: false, error: err.toString().slice(7, err.length) });
    });
});

router.post('/login', (req, res) => {
    Joi.validate(req.body, loginAuthor, (err, validator) => {
        if(!err)
            generateToken(userDB, req, res);
        else
            res.json({ success: false, msg: 'Failed to register user!', error: err.toString().slice(7, err.length), token: false });
    });
});

router.post('/authenticated', checkUserToken, (req, res) => {
    let token = req.body.token;

    res.json({ success: true, token: token });
	res.end();
});

module.exports = router;

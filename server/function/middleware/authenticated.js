var jwt = require('jsonwebtoken');
var config = require('../../../config/development');

function checkIfAuthenticated(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;

    if (token) {
        jwt.verify(token, config.jwt.secret, function (err, decoded) {
            if (err) {
            	res.json({success: false, message: 'Failed to authenticate token.'});

            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.redirect('/');
    }
};

module.exports = checkIfAuthenticated;

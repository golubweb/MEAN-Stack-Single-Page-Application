"use strict";

const jwt = require('jsonwebtoken');
const config = require('../../../config/development');

function authenticate(userDB, req, res) {
	let token, userData,
		email = req.body.username,
		pass = req.body.password;

	userDB.getUserData(email, pass).then((data) => {
		if(data !== undefined) {
			userData = {
				id: data['_id'],
				username: data['name'],
				email: data['email']
			}

			token = jwt.sign(userData, config.jwt.secret, {expiresIn: 4000});
            res.json({ success: true, token: token });

			//res.cookie('token', token, { maxAge: 900000, httpOnly: true });
		} else {
			res.json({ success: false, token: false });
		}
	});
}

module.exports = authenticate;

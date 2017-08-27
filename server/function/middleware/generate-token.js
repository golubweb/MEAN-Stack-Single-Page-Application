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
				_id:   data['_id'],
				name:  data['name'],
                nick:  data['nickname'],
				email: data['email']
			}

			token = jwt.sign(userData, config.jwt.secret, {expiresIn: 4000});
            res.json({ success: true, token: token });
		} else {
			res.json({ success: false, token: false });
		}
	});
}

module.exports = authenticate;

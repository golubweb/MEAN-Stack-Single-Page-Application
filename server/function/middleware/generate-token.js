var jwt = require('jsonwebtoken');
var config = require('../../../config/development');

var login = require('../db/login');
var loginDB = new login();

function authenticate(req, res, next) {
	var token, userData,
		email = req.body.user_email,
		pass = req.body.user_pass;

	loginDB.getUserData(email, pass).then((data) => {
		if(data !== undefined) {
			userData = {
				id: data['user_id'],
				username: data['user_name'],
				email: data['user_email']
			}

			token = jwt.sign(userData, config.jwt.secret, {expiresIn: 4000});

			res.cookie('token', token, { maxAge: 900000, httpOnly: true });
			res.render('admin.ejs', {info: data});
			res.end();
		} else {
			next();
		}
	});
}

module.exports = authenticate;

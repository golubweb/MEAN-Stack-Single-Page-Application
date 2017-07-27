var jwt = require('jsonwebtoken');
var config = require('../../../config/development');

var login = require('../db/login');
var loginDB = new login();

function authenticate(req, res, next) {
	var token, userData,
		email = req.body.username,
		pass = req.body.password;

	loginDB.getUserData(email, pass).then((data) => {
		if(data !== undefined) {
			userData = {
				id: data['user_id'],
				username: data['user_name'],
				email: data['user_email']
			}

			token = jwt.sign(userData, config.jwt.secret, {expiresIn: 4000});

            res.json({ success: true, token: token });

			//res.cookie('token', token, { maxAge: 900000, httpOnly: true });
			//res.render('admin.ejs', {info: data});
			//res.end();
		} else {
			res.json({ success: false });
		}
	});
}

module.exports = authenticate;

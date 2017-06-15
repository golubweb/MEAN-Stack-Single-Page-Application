"use strict";

const knex = require('../../../config/knex');

class loginDB {
	constructor() {}

	getUserData(email, pass) {
		 return new Promise((resolve, reject) => {
			knex.select('user_id', 'user_name', 'user_email', 'user_hash')
				.from('users')
				.where('user_email', email)
				.andWhere('user_password', pass)
				.andWhere('user_stats', 1)
				.then((data) => {
					resolve(data);
			});
		}).catch((reason) => {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
	}
}

module.exports = loginDB;

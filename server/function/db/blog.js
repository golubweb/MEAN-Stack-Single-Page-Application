"use strict";

const knex = require('../../../config/knex');

class blogDB {
	constructor() {}

	getBlogCategory(email, pass) {
		 return new Promise((resolve, reject) => {
			knex.select('post_id', 'post_name', 'post_text', 'post_author', 'post_tags', 'post_date')
				.from('post')
				.where('post_stats', 1)
				.then((data) => {
					resolve(data);
			});
		})
		.catch((reason) => {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
	}

	getPost(postID) {
		return new Promise((resolve, reject) => {
			knex.select('*')
				.from('post')
				.where('post_id', postID)
				.then((data) => {
					resolve(data);
			});
		})
		.catch((reason) => {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
	}
}

module.exports = blogDB;
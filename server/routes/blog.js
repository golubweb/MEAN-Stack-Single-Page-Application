var app = require('../../app');

var express = require('express');
var router = express.Router();

const blog = require('../function/db/blog');
var blogDB = new blog();

router.get('/blog', (req, res) => {
	blogDB.getBlogCategory().then((response)=> {
		res.render('post_list.ejs', {items: response});
		res.end();
	});
});

router.get('/post/:id', (req, res) => {
	var post_id = req.params.id;

	blogDB.getPost(post_id).then((response)=> {
		res.render('post.ejs', {item: response[0]});
		res.end();
	});
});

module.exports = router;

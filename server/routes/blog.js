"use strict";

var app = require('../../app');

var express = require('express');
var router = express.Router();

var checkUserToken = require('../function/middleware/authenticated');

const blog = require('../function/db/blog');
const blogDB = new blog();

router.get('/blog/category/posts/:id', (req, res)=> {
    let catID = req.params.id;

    blogDB.getCategory(catID).then((response) => {
        res.json({ category: response });
		res.end();
    });
})

router.get('/blog/category', (req, res) => {
	blogDB.getAllCategory().then((response)=> {
		res.status(200).json({ allCategory: response });
		res.end();
	});
});

router.get('/blog/post/:id', (req, res) => {
	var post_id = req.params.id;

	blogDB.getPost(post_id).then((response)=> {
		res.json({ post: response[0] });
		res.end();
	});
});

module.exports = router;

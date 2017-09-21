"use strict";

const app = require('../../app'),
      router = require('express').Router();

const Blog = require('../function/mongoDB/blog'),
      blogDB = new Blog();

router.get('/blog/category/posts/:id', (req, res)=> {
    let catID = req.params.id;

    blogDB.getCategory(catID).then((response) => {
        res.json({ category: response });
		res.end();
    });
})

router.get('/blog/category', (req, res) => {
    blogDB.getAllCategory().then((response) => {
        res.json({ allCategory: response });
        res.end();
    });

});

router.get('/blog/post/:id', (req, res) => {
	var post_id = req.params.id;

	blogDB.getPost(post_id).then((response)=> {
		res.json({ post: response });
		res.end();
	});
});

module.exports = router;

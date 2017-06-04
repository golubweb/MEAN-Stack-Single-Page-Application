// CONNECTION DATA BASE
// ==============================================
var db = require('../../connectionDB');
var app = require('../../app');

var express = require('express');
var router = express.Router();

router.get('/blog', function(req, res) {
	db.query('SELECT post_id, post_name, post_text, post_author, post_tags, post_comment_sum, post_date FROM post WHERE post_stats ="1"', function(error, rows){
		res.render('post_list.ejs', {items: rows});
		res.end();
	});
});

router.get('/post/:id', function(req, res) {
	var post_id = req.params.id;
	//var post_url = path.join(__dirname, 'templates');

	db.query('SELECT * FROM post WHERE post_id="' + post_id + '"' , function(error, rows, fields) {
		if(rows[0].post_stats == 1) {
			res.render('post.ejs', {item: rows[0]});
		} else {
			res.render('404.ejs');
		}

		res.end();
	});
});

module.exports = router;

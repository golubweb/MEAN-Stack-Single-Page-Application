var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('base');

router.get('/post', function(req, res, next){
	res.send('respond with a resource');
});
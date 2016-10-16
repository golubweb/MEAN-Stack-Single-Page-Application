//https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/ 
//Easy Darko
//var http = require('http');

var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('gwbase');

router.get('/post', function(req, res, next){
	res.send('respond with a resource');
	
    /*connection.query('SELECT * FROM golubweb_practically').then(function(error, rows, fields) {
        if(!error) {
            console.log('Error in data base');
        } else {
            console.log(rows);
        }
    });*/
});


//express.listen(1337);
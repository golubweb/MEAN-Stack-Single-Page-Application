var express = require('express');
var mysql = require('mysql');

	
var connection = mysql.createConnection({
	host    : '127.0.0.1',
	user    : 'root',
	password: '',
	database: 'golubweb_practically'
});

connection.connect();

connection.connect(function(error) {
	if(!error) {
		return console.log('Error');
	} else {
		return console.log('Connected to DB');
	}
});

module.exports = connection;

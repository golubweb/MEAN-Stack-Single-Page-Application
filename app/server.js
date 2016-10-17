var http = require('http');
var db = require('./connectionDB');
var express = require('express');
var app = express();

//var connect = require('connect');
//var app = connect();

app.get('/', function(request, response, next) {
	console.log(db);
	
	db.query('SELECT * FROM tags', function(error, rows, fields) {
        if(!error) {
            for(var i in rows) {
            	console.log(rows[i].post_name);
			}
        } else {
            console.log(error);
        }
    });
	response.end();
});

//app.get('/', dbRun);


http.createServer(app).listen(8888);
console.log("server is now running...");


/*function onRequest(requset, response) {
	console.log('A user made a requset' + requset.url);
	
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('Here is some data');
	response.end();
}*/

//npm install connect
//https://www.youtube.com/watch?v=_D2w0voFlEk&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_&index=14

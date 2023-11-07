// Create Web Server for Comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var comments = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/comments', function(req, res) {
	res.json(comments);
});

app.post('/comments', function(req, res) {
	comments.push(req.body);
	res.json(comments);
});

app.listen(3000, function() {
	console.log('Server running at http://localhost:3000');
});
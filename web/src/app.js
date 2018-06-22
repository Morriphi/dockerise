const express = require('express');
const request = require('request');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
	request('http://api/', (error, response, body) => {
		res.render('index', { title: 'Hey', message: body});
	});
});

app.get('/publish', function (req, res) {
	request.post('http://api/publish', {value: 'Hello World!'});
	res.render('index', { title: 'Hey', message: ''});
});

app.get('/subscribe', function(req, res) {
	request('http://api/subscribe', (error, response, body) => {
		res.send(body);
	});
});

module.exports = app;


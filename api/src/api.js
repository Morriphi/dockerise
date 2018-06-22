const http = require('http');
const redis = require('then-redis');

const express = require('express');
const app = express();

const db = redis.createClient({host: 'redis'});
db.incr('hits');

app.get('/', function (req, res) {
	db.get('hits').then((hits) => {
		db.incr('hits');
		res.send(`Api called ${hits} times!`);
	});
});

module.exports = app;


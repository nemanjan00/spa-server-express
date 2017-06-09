#!/usr/bin/env node

var express = require('express');

var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);

var cacheTime = 86400000*7;     // 7 days
app.use(express.static('./public', {maxAge: cacheTime}));

app.use(function(req, res, next) {
	res.status(200).sendFile(process.cwd()+'/public/index.html');
});

app.listen(app.get('port'), function () {
	console.log('Started web server on port: ' + app.get('port'));
});


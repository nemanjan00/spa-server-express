var express = require('express');

var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get(function(req, res, next) {
	res.status(200).sendFile(path.join(__dirname+'../public/index.html'));
});

app.listen(app.get('port'), function () {
	console.log('Started web server on port: ' + app.get('port'));
});


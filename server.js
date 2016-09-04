var express = require('express');
var app = express();                             
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/src/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var port = 6465
app.listen(port);

app.get('*', function(req, res) {
    res.sendFile('./index.html');
});

console.log("App listening on port " + port);
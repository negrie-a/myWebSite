//npm_Module
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

//my_Module
var paths = require('./core/paths').init();
var database = require('./core/database').setup('models');

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var routeLoader = require($path.core + 'routeLoader').load(app, 'controllers');

module.exports = app;

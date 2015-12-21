var filesystem	= require('fs');
var models		= {};

var singleton = function singleton() {
	var env       = 'development';
	var Sequelize = require('sequelize');
	var sequelize = null;
	var config = require($path.database + 'config.json')[env];

    this.model = function (name){
        return models[name];
    }

    this.Seq = function (){
        return Sequelize;
    }

	this.setup = function(path) {
		sequelize = new Sequelize(config.database, config.username, config.password, config);
		init();
	}

	function init() {
		filesystem.readdirSync($path.models).forEach(function(modelObject){
			var object = require($path.models + modelObject);
			var options = object.options || {};
			var modelName = modelObject.replace(/\.js$/i, '');
			models[modelName] = sequelize.define(modelName, object.model, options);
		});
	}

	if(singleton.caller != singleton.getInstance){
        throw new Error('This object cannot be instanciated');
    }
}

singleton.instance = null;

singleton.getInstance = function(){
    if(this.instance === null){
        this.instance = new singleton();
    }
    return this.instance;
}

module.exports = singleton.getInstance();
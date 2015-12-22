var orm = require($path.core + 'database');

var index = function(req, res)
{
	console.log('ACTION INDEX | CONTROLLER USER');

    ProjectsDetails = orm.model('SkillsLanguage');
    
    ProjectsDetails.findAll().then(function(projects) {
	res.setHeader('Content-Type', 'application/json');
	res.json(projects);
    })
}

var getLanguage = function(req, res)
{
	Language = orm.model('SkillsLanguage');
    Language.findAll({where : {'type' : req.params.type}}).then(function(projects) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(projects);
    });
}

var getAllLanguage = function(req, res)
{
	Language = orm.model('SkillsLanguage');
    Language.findAll().then(function(projects) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(projects);
    });
}

var getRecognition = function(req, res)
{
	Recognition = orm.model('SkillsRecognition');
    Recognition.findAll().then(function(projects) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(projects);
    });
}

var getSoftware = function(req, res)
{
	Software = orm.model('SkillsSoftware');
    Software.findAll().then(function(projects) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(projects);
    });
}

var foreignLanguage = function(req, res)
{
	ForeignLanguage = orm.model('SkillsForeignLanguage');
    ForeignLanguage.findAll().then(function(projects) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(projects);
    });
}

var getKnowledge = function(req, res)
{
	Knowledge = orm.model('SkillsKnowledge');
    Knowledge.findAll().then(function(projects) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(projects);
    });
}

var getHobbies = function(req, res)
{
	Hobbies = orm.model('SkillsHobbies');
    Hobbies.findAll().then(function(projects) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(projects);
    });
}

module.exports = {
    '/' : [
	{
	    verb 		: 'get',
	    action 		: index,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
    ],
     '/language' : [
	{
	    verb 		: 'get',
	    action 		: getAllLanguage,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/recognition' : [
	{
	    verb 		: 'get',
	    action 		: getRecognition,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/software' : [
	{
	    verb 		: 'get',
	    action 		: getSoftware,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
   	'/language/:type' : [
	{
	    verb 		: 'get',
	    action 		: getLanguage,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/foreignLanguage' : [
	{
	    verb 		: 'get',
	    action 		: foreignLanguage,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/knowledge' : [
	{
	    verb 		: 'get',
	    action 		: getKnowledge,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/hobbies' : [
	{
	    verb 		: 'get',
	    action 		: getHobbies,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
}

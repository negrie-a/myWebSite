var orm = require($path.core + 'database');

var index = function(req, res)
{
	console.log('ACTION INDEX | CONTROLLER USER');

    Project = orm.model('Projects');
    
    Project.findAll().success(function(projects) {
	res.setHeader('Content-Type', 'application/json');
	res.json(projects);
    })
}

var getProjectById = function(req, res)
{
	Project = orm.model('Projects');
    Project.findAll({where : {'id' : req.params.id}}).success(function(projects) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(projects);
    });
}

var getProjectByName = function(req, res)
{
	Project = orm.model('Projects');
    Project.find({where : {'title' : req.params.name}}).success(function(projects) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(projects);
    });
}

var getAllImage = function(req, res)
{
    ProjectsImage = orm.model('ProjectsImage');
    ProjectsImage.findAll().success(function(images) {
	res.setHeader('Content-Type', 'application/json');
	console.log("toto");
	res.json(images);
    });
}

var getImageByList = function(req, res)
{
	var list = req.params.list.split("-");
    ProjectsImage = orm.model('ProjectsImage');
    ProjectsImage.findAll({where : {id: list},
    						attributes: ['image']}).success(function(image) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(image);
    });
}

var getImageById = function(req, res)
{
    ProjectsImage = orm.model('ProjectsImage');
    ProjectsImage.findAll({where : {'fk-id-projects' : req.params.id}}).success(function(image) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(image);
    });
}

var getAllVideo = function(req, res)
{
    ProjectsVideo = orm.model('ProjectsVideo');
    ProjectsVideo.findAll().success(function(videos) {
	res.setHeader('Content-Type', 'application/json');
	res.json(videos);
    });
}

var getVideoById = function(req, res)
{
    ProjectsVideo = orm.model('ProjectsVideo');
    ProjectsVideo.findAll({where : {'fk-id-projects' : req.params.id}}).success(function(video) {
    	res.setHeader('Content-Type', 'application/json');
		res.json(video);
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
    '/:id(\\d+)/' : [
	{
	    verb 		: 'get',
	    action 		: getProjectById,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/name/:name' : [
	{
	    verb 		: 'get',
	    action 		: getProjectByName,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/images' : [
	{
	    verb 		: 'get',
	    action 		: getAllImage,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/images/:id(\\d+)' : [
	{
	    verb 		: 'get',
	    action 		: getImageById,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/images/:list' : [
	{
	    verb 		: 'get',
	    action 		: getImageByList,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/videos' : [
	{
	    verb 		: 'get',
	    action 		: getAllVideo,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	],
	'/videos/:id' : [
	{
	    verb 		: 'get',
	    action 		: getVideoById,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
	]
};

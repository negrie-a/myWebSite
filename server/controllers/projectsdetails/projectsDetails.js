var orm = require($path.core + 'database');

var index = function(req, res)
{
	console.log('ACTION INDEX | CONTROLLER USER');

    ProjectsDetails = orm.model('ProjectsDetails');
    
    ProjectsDetails.findAll().then(function(projects) {
	res.setHeader('Content-Type', 'application/json');
	res.json(projects);
    })
}

var getProjectDetails = function(req, res)
{
	Project = orm.model('ProjectsDetails');
    Project.findAll({where : {'fk-id-projects' : req.params.id}}).then(function(projects) {
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
    '/:id(\\d+)/' : [
	{
	    verb 		: 'get',
	    action 		: getProjectDetails,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
    ]
}

var orm = require($path.core + 'database');

var index = function(req, res)
{
	console.log('ACTION INDEX | CONTROLLER USER');

    Article = orm.model('Projects');
    
    Article.findAll().success(function(projects) {
	res.setHeader('Content-Type', 'application/json');
	res.json(projects);
    })
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
    ]
}


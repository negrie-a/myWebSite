var orm = require($path.core + 'database');
var mail = require($path.core + 'mail');
var Promise = require('promise');

var index = function(req, res)
{
	 Contact = orm.model('Contact');
    
     Contact.findAll().success(function(projects) {
	 res.setHeader('Content-Type', 'application/json');
	 res.json(projects);
 	 })
}

var sendMail = function(req, res)
{
	res.setHeader('Content-Type', 'application/json');

	var mailPromise = new Promise(function(resolve, reject){
		mail.sendMail(req.body.from, req.body.to, req.body.subject, req.body.text, resolve, reject);
	});
	mailPromise.then(function(data)
	{
		res.json(data);
	},
	function(err)
	{
		res.json(err);
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
    '/sendMail' : [
	{
	    verb 		: 'post',
	    action 		: sendMail,
	    acl		: {
		level	: 'public',
		failureRedirect	: '/'
	    }
	}
    ]
}

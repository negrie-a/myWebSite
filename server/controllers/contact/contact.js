var orm = require($path.core + 'database');
var mailer = require($path.core + 'mail');
var Promise = require('promise');

var index = function(req, res)
{
	 Contact = orm.model('Contact');
    
     Contact.findAll().then(function(projects) {
	 res.setHeader('Content-Type', 'application/json');
	 res.json(projects);
 	 })
}

var sendMail = function(req, res)
{
	var optionMail = {
		from: mailer.getConfig('defaultFrom'),
		to: "aurelien.negrier@epitech.eu",
		subject: req.body.subject,
		template: "contact",
		context: {
			from: req.body.from,
			text: req.body.text,
			coord: req.body.coord
		},
	};

	mailer.sendMail(optionMail)
	.catch(function (err) {
		console.log(err);
	});
	res.status(200).json({message: "Please validate your email address by clicking the link we sent you"});
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

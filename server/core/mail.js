var nodemailer = require('nodemailer');
var Promise = require('promise');
///////////////
//CONFIG MAIL//
///////////////

var configMail = [{
	service: "Hotmail",
	auth: {
		user: "aurelienegrier@hotmail.fr",
		pass: "*WEO5_LR"
	}
}]

//////////////

var singletonMail = function() {
	var transporter = {};

	this.sendMail = function(from, to, subject, text, resolve, reject)
	{
		var mailOptions = {
			from: from,
			to: to,
			subject: subject,
			text: text
		};

		var emailUse;
		if (from.indexOf("<") != -1)
			emailUse = from.substring(from.indexOf("<") + 1, from.indexOf(">"));
		else
			emailUse = from;

		console.log(emailUse);
		console.log(transporter);
		transporter[emailUse].sendMail(mailOptions, function(error, info){
			if(error)
			{
				console.log(error);
				reject(error);
			}
			else
			{
				console.log('Message sent: ' + info.response);
				resolve(info);
			}
		});
	}

	function init() {
		for(var item in configMail)
			transporter[configMail[item].auth.user] = nodemailer.createTransport(configMail[item]);
	}

	if(singletonMail.caller != singletonMail.getInstance){
		throw new Error('This object singletonMail cannot be instanciated');
	}
	init();
}

singletonMail.instance = null;

singletonMail.getInstance = function(){
	if(this.instance === null){
		this.instance = new singletonMail();
	}
	return this.instance;
}

module.exports = singletonMail.getInstance();
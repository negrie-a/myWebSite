app.controller('contactController', ['$scope', 'contactFactory', function ($scope, contactFactory){

	var self = this;
	$scope.loadersend = false;

	contactFactory.getContact().then(function(data)
	{
		self.contact = data[0];
	},
	function(error)
	{
		console.log(error);
	});

	this.submit = function()
	{
		if (self.mailForm.$valid)
			self.send();
	}

$scope.$on('httpRequest', function (event, data) { // marche meme sur les autres pages
    	if (data.url == "/contact/sendMail")
    		$scope.loadersend = true;
  });
$scope.$on('httpResponse', function (event, data) { // marche meme sur les autres pages
    	if (data.config.url == "/contact/sendMail" && data.status == 200)
    	{
    		$scope.loadersend = false;
    		self.text = "";
    		self.nameSender = "";
    		self.emailSender = "";
    		self.subject = "";
    		self.phoneSender = "";
    	}
  });

	this.send = function()
	{
		var from = "<aurelienegrier@hotmail.fr>";
		var dest = "<aurelien.negrier@epitech.eu>";
		var text = self.text;

		text += "\n\n---------\nCoordonnée du contact : \n" + self.nameSender + "\n" + self.phoneSender + "\n" + self.emailSender + "\n---------";
		contactFactory.sendMail(from,
								dest,
								self.subject,
								text);
	}
	return;
}]);

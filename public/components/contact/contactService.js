app.factory('contactFactory', ['$http', '$q', '$rootScope', function($http, $q, $rootScope)
{
	var factory = {

		contact : false,
		
		sendMail : function(from1, to1, subject1, text1)
		{
			var deferred = $q.defer();
				$http.post('/contact/sendMail', {
					from: from1,
					to : to1,
					subject : subject1,
					text : text1})
				.success(function(data, status)
				{
					deferred.resolve();
				})
				.error(function(data, status)
				{
					deferred.resolve("Error post /sendMail");
				});
			return deferred.promise;
		},

		getContact : function()
		{
			var deferred = $q.defer();

			if (factory.contact !== false)
			{
				deferred.resolve(factory.contact);
			}
			else
			{
				$http.get('/contact')
				.success(function(data, status)
				{
					factory.contact = data;
					deferred.resolve(factory.contact);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /contact");
				});
			}
			return deferred.promise;
		}
	}
	return factory;
}]);

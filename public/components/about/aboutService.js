app.factory('aboutFactory', ['$http', '$q', function($http, $q)
{
	var factory = {
		profil : false,

		getProfil : function()
		{
			var deferred = $q.defer();

			if (factory.profil !== false)
			{
				deferred.resolve(factory.profil);
			}
			else
			{
				$http.get('/profil')
				.success(function(data, status)
				{
					factory.profil = data;
					deferred.resolve(factory.profil);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /profil");
				});
			}
			return deferred.promise;
		}
	}
	return factory;
}]);

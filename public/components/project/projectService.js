app.factory('projectFactory', ['$http', '$q', function($http, $q)
{
	var factory = {
		projects : false,
		images : false,

		getProjects : function()
		{
			var deferred = $q.defer();

			if (factory.projects !== false)
			{
				deferred.resolve(factory.projects);
			}
			else
			{
				$http.get('/project')
				.success(function(data, status)
				{
					factory.projects = data;
					deferred.resolve(factory.projects);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /project");
				});
			}
			return deferred.promise;
		},

		getProjectByName : function(name)
		{
			var deferred = $q.defer();

			$http.get('/project/name/' + name)
			.success(function(data, status)
			{
				deferred.resolve(data);
			})
			.error(function(data, status)
			{
				deferred.resolve("Error get /name/:name");
			});
			return deferred.promise;
		},

		getImages : function()
		{
			var deferred = $q.defer();

			if (factory.images !== false)
			{
				deferred.resolve(factory.images);
			}
			else
			{
				$http.get('/project/images')
				.success(function(data, status)
				{
					factory.images = data;
					deferred.resolve(factory.images);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /project/images");
				});
			}
			return deferred.promise;
		},

		getImageById : function(id)
		{
			var deferred = $q.defer();

			$http.get('/project/images/' + id)
			.success(function(data, status)
			{
				factory.images = data;
				deferred.resolve(factory.images);
			})
			.error(function(data, status)
			{
				deferred.resolve("Error get /project/images");
			});
			return deferred.promise;
		}
	}
	return factory;
}]);

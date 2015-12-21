app.service('projectdescriptionFactory', ['$http', '$q', function($http, $q)
{
	var factory = {
		project : false,
		images : false,
		videos : false,
		projectsDetails : false,
		projectsVideo : false,

		getProjectById : function(id)
		{
			var deferred = $q.defer();

			$http.get('/project/' + id)
			.success(function(data, status)
			{
				factory.project = data;
				deferred.resolve(factory.project);
			})
			.error(function(data, status)
			{
				deferred.resolve("Error get /project/id");
			});
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
		},

		getImageByList : function(list)
		{
			var deferred = $q.defer();

			$http.get('/project/images/' + list)
			.success(function(data, status)
			{
				deferred.resolve(data);
			})
			.error(function(data, status)
			{
				deferred.resolve("Error get /project/images/list");
			});
			return deferred.promise;
		},


		getVideos : function()
		{
			var deferred = $q.defer();

			if (factory.videos !== false)
			{
				deferred.resolve(factory.videos);
			}
			else
			{
				$http.get('/project/videos')
				.success(function(data, status)
				{
					factory.videos = data;
					deferred.resolve(factory.videos);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /project/videos");
				});
			}
			return deferred.promise;
		},

		getDetailProject : function(id)
		{
			var deferred = $q.defer();

			$http.get('/projectsDetails/' + id)
			.success(function(data, status)
			{
				factory.projectsDetails = data;
				deferred.resolve(factory.projectsDetails);
			})
			.error(function(data, status)
			{
				deferred.resolve("Error get /projectsDetails/id");
			});
			return deferred.promise;
		},

		getVideoProject : function(id)
		{
			var deferred = $q.defer();

			$http.get('/project/videos/' + id)
			.success(function(data, status)
			{
				factory.projectsVideo = data;
				deferred.resolve(factory.projectsVideo);
			})
			.error(function(data, status)
			{
				deferred.resolve("Error get /projects/videos/id");
			});
			return deferred.promise;
		},
	}
	return factory;
}]);

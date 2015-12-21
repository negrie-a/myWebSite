app.factory('articleFactory', ['$http', '$q', function($http, $q)
{
	var factory = {
		articles : false,

		getArticles : function()
		{
			var deferred = $q.defer();

			if (factory.articles !== false)
			{
				deferred.resolve(factory.articles);
			}
			else
			{
				$http.get('/article')
				.success(function(data, status)
				{
					factory.articles = data;
					deferred.resolve(factory.articles);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /articles");
				});
			}
			return deferred.promise;
		}
	}
	return factory;
}]);
app.factory('skillsFactory', ['$http', '$q', function($http, $q)
{
	var factory = {
		languageWeb : false,
		languageMobile : false,
		languageCompiled : false,
		language : false,
		recognition : false,
		foreignLanguage : false,
		software : false,
		hobbies : false,
		knowledge : false,

		getLanguage : function(type)
		{
			var deferred = $q.defer();

			if (factory['language' + type] !== false)
			{
				deferred.resolve(factory['language' + type]);
			}
			else
			{
				$http.get('/skills/language/' + type)
				.success(function(data, status)
				{
					factory['language' + type] = data;
					deferred.resolve(factory['language' + type]);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /skills/language/" + type);
				});
			}
			return deferred.promise;
		},

		getAllLanguage : function(type)
		{
			var deferred = $q.defer();

			if (factory.language !== false)
			{
				deferred.resolve(factory.language);
			}
			else
			{
				$http.get('/skills/language')
				.success(function(data, status)
				{
					factory.language = data;
					deferred.resolve(factory.language);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /skills/language");
				});
			}
			return deferred.promise;
		},

		getRecognition : function(type)
		{
			var deferred = $q.defer();

			if (factory.recognition !== false)
			{
				deferred.resolve(factory.recognition);
			}
			else
			{
				$http.get('/skills/recognition')
				.success(function(data, status)
				{
					factory.recognition = data;
					deferred.resolve(factory.recognition);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /skills/recognition");
				});
			}
			return deferred.promise;
		},

		getSoftware : function(type)
		{
			var deferred = $q.defer();

			if (factory.software !== false)
			{
				deferred.resolve(factory.software);
			}
			else
			{
				$http.get('/skills/software')
				.success(function(data, status)
				{
					factory.software = data;
					deferred.resolve(factory.software);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /skills/software");
				});
			}
			return deferred.promise;
		},

		getKnowledge : function(type)
		{
			var deferred = $q.defer();

			if (factory.knowledge !== false)
			{
				deferred.resolve(factory.knowledge);
			}
			else
			{
				$http.get('/skills/knowledge')
				.success(function(data, status)
				{
					factory.knowledge = data;
					deferred.resolve(factory.knowledge);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /skills/knowledge");
				});
			}
			return deferred.promise;
		},

		getHobbies : function(type)
		{
			var deferred = $q.defer();

			if (factory.hobbies !== false)
			{
				deferred.resolve(factory.hobbies);
			}
			else
			{
				$http.get('/skills/hobbies')
				.success(function(data, status)
				{
					factory.hobbies = data;
					deferred.resolve(factory.hobbies);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /skills/hobbies");
				});
			}
			return deferred.promise;
		},
		
		getForeignLanguage : function(type)
		{
			var deferred = $q.defer();

			if (factory.foreignLanguage !== false)
			{
				deferred.resolve(factory.foreignLanguage);
			}
			else
			{
				$http.get('/skills/foreignLanguage')
				.success(function(data, status)
				{
					factory.foreignLanguage = data;
					deferred.resolve(factory.foreignLanguage);
				})
				.error(function(data, status)
				{
					deferred.resolve("Error get /skills/software");
				});
			}
			return deferred.promise;
		}
	}
	return factory;
}]);


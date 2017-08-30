var app = angular.module('Main', [
			'ngRoute',
			'ngAnimate',
			"ngSanitize",
			"ui.bootstrap",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster",
			"com.2fdevs.videogular.plugins.buffering",
			"uiGmapgoogle-maps"
])
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCzInZZdh8h_O8qWXUCsuSTcwO1HNvVYoA',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'components/home/homeView.html',
		controller : 'homeController as home'
	})
	.when('/article', {
		templateUrl: 'components/article/articleView.html',
		controller : 'articleController'
	})
	.when('/blog', {
		templateUrl: 'components/blog/blogView.html',
		controller : 'blogController'
	})
	.when('/project', {
		templateUrl: 'components/project/projectView.html',
		controller : 'projectController as project'
	})
	.when('/project/:id', {
		templateUrl: 'components/projectdescription/projectdescriptionView.html',
		controller : 'projectdescriptionController as projectdescription'
	})
	.when('/about', {
		templateUrl: 'components/about/aboutView.html',
		controller : 'aboutController as about'
	})
	.when('/skills', {
		templateUrl: 'components/skills/skillsView.html',
		controller : 'skillsController as skills'
	})
	.when('/contact', {
		templateUrl: 'components/contact/contactView.html',
		controller : 'contactController as contact'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

app.filter('backline', function () {
  return function (item) {
  	if (item) {
  		return item.replace(/\n/g, "<br />");
  	}
  };
});

app.config(['$httpProvider', '$provide', function ($httpProvider, $provide) {
	$provide.factory('httpInterceptor', ['$q', '$rootScope', function ($q, $rootScope) {
        return {
            'request': function (config) {
                $rootScope.$broadcast('httpRequest', config);
                return config || $q.when(config);
            },
            'response': function (response) {
                $rootScope.$broadcast('httpResponse', response);
                return response || $q.when(response);
            },
            'requestError': function (rejection) {
                $rootScope.$broadcast('httpRequestError', rejection);
                return $q.reject(rejection);
            },
            'responseError': function (rejection) {
                $rootScope.$broadcast('httpResponseError', rejection);
                return $q.reject(rejection);
            }
        };
    }]);
    $httpProvider.interceptors.push('httpInterceptor');
}])

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
app.factory('blogFactory', ['$http', '$q', function($http, $q)
{
	var factory = {
		
	}
	return factory;
}]);
app.factory('contactFactory', ['$http', '$q', '$rootScope', function($http, $q, $rootScope)
{
	var factory = {

		contact : false,
		
		sendMail : function(from1, to1, subject1, text1, coord1)
		{
			var deferred = $q.defer();
				$http.post('/contact/sendMail', {
					from: from1,
					to : to1,
					subject : subject1,
					text : text1,
					coord: coord1})
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

app.factory('homeFactory', ['$http', '$q', function($http, $q)
{
	return factory;
}]);
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


app.controller('aboutController', ['$scope', 'aboutFactory', function ($scope, aboutFactory){

    $scope.map = { center: { latitude: 42.634534, longitude: 2.762357 }, zoom: 11, options: {scrollwheel: false} };
$scope.marker = {
      id: 0,
      coords: {
        latitude: 42.634534,
        longitude: 2.762357
      },
      options: {icon:'/assets/img/icon_geo.png'}
  }
    aboutFactory.getProfil().then(
        function(data)
        {
            $scope.profil = data[0];
            var prof = data[0];
            $scope.profilData = [{
                "name" : "Nom",
                "data" : prof.name
            },
            {
                "name" : "Date de naissance",
                "data" : prof['date-of-birth'].substr(0,10)
            },
            {
                "name" : "Nationalité",
                "data" : prof.nationality
            },
            {
                "name" : "Adresse",
                "data" : prof.adress
            },
            {
                "name" : "Téléphone",
                "data" : prof.phone
            },
            {
                "name" : "Email",
                "data" : prof.email
            },
            {
                "name" : "Vehicule",
                "data" : "Permis B"
            }];
        },
        function(error)
        {
            console.log(error);
        });
    return;
}]);

app.controller('articleController', ['$scope', 'articleFactory', function ($scope, articleFactory){

	return;
}]);

app.controller('blogController', ['$scope', 'blogFactory', function ($scope, blogFactory){
	
	return;
}]);

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
		var coord = "---------  " + self.nameSender + " | " + self.phoneSender + " | " + self.emailSender + "  ---------";
		contactFactory.sendMail(from,
								dest,
								self.subject,
								text,
								coord);
	}
	return;
}]);

app.controller('homeController', ['$scope', 'articleFactory', 'contactFactory', 'projectFactory', '$rootScope', function ($scope, articleFactory, contactFactory, projectFactory, $rootScope){
    var self = this;

    self.contact = [];

    contactFactory.getContact()
    .then(function(contact)
    {
        self.contact = contact[0];
    },
    function()
    {

    });

    self.favoriteProject = [{
        index: "2",
        name : "Raytracer",
        src : "/assets/img/projets/raytracer/scene14.jpg"
    },
    {
        index: "1",
        name : "Zappy",
        src : "/assets/img/projets/zappy/menu.png"
    },
    {
        index: "4",
        name : "Snake",
        src : "/assets/img/projets/nibbler/obstacleOpenGL.png"
    }];

    return;
}]);

app.controller('projectController', ['$scope', 'projectFactory', '$window', function ($scope, projectFactory, $window){
	
	var self = this;
	self.widthScreen = window.innerWidth
	$(window).resize(function(){
       self.widthScreen = window.innerWidth;
       console.log(self.widthScreen);
       $scope.$apply();
   });

	var addImageToProjects = function(index)
	{
		projectFactory.getImageById($scope.projects[index].id)
		.then(function(images)
		{
			$scope.projects[index].images = images;
			console.log(images);
			}, function(msg)
			{
				alert(msg);
			});
	}

	self.getHeight = function() {

	}

	projectFactory.getProjects()
	.then(function(projects)
	{
		$scope.projects = projects;
		for (index in projects)
		{
			addImageToProjects(index);
		}
	}, function(msg)
	{
		alert(msg);
	});
	return;
}]);

app.controller('projectdescriptionController', ['$scope', "$sce", "$timeout", "$rootScope", "$routeParams", 'projectdescriptionFactory', function($scope, $sce, $timeout, $rootScope, $routeParams, projectdescriptionFactory)
{
	/////////////
	//VIDEOGULAR
	/////////////

	var controller = this;
	controller.state = null;
	controller.API = null;
	controller.currentVideo = 0;
	controller.pictures = [];
	controller.videoProject = false;
	controller.videos = [];
	controller.slider = [];

	controller.onPlayerReady = function(API) {
		controller.API = API;
	};

	controller.onCompleteVideo = function() {
		controller.isCompleted = true;

		controller.currentVideo++;

		if (controller.currentVideo >= controller.videos.length) controller.currentVideo = 0;

		controller.setVideo(controller.currentVideo);
	};

	projectdescriptionFactory.getVideoProject($routeParams.id)
	.then(function(projectVideo)
	{
		if (projectVideo.lengh == 0)
			controller.videoProject = false;
		else
		{
			for (index in projectVideo)
			{
				var source = [];
				types = projectVideo[index].type.split(" ");
				for (i in types)
				{
					source.push({src: projectVideo[index].video + "." + types[i], type: "video/" + types[i]});
				}
				controller.videos.push({
					sources : source,
					img : projectVideo[index].img
				});
			}

			controller.config = {
				preload: "none",
				autoHide: false,
				autoHideTime: 3000,
				autoPlay: false,
				sources: controller.videos[0].sources,
				theme: {
					url: "bower_components/videogular-themes-default/videogular.css"
				}
			};
		}
	});

	controller.setVideo = function(index) {
		controller.API.stop();
		controller.currentVideo = index;
		controller.config.sources = controller.videos[index].sources;
		$timeout(controller.API.play.bind(controller.API), 100);
	};

	//////////////////

	projectdescriptionFactory.getProjectById($routeParams.id)
	.then(function(project)
	{
		controller.project = project[0];
		projectdescriptionFactory.getImageByList(controller.project.slider)
		.then(function(imgList)
		{
			controller.slider = imgList;
		},
		function(msg)
		{
			alert(msg);
		});

		$scope.information = [{
			"icon" : "fa fa-calendar",
			"title" : "Date of completion",
			"data" : controller.project.start.substring(0,10)
		},
		{
			"icon" : "fa fa-bullseye",
			"title" : "Language",
			"data" : controller.project.language
		},
		{
			"icon" : "fa fa-users",
			"title" : "Teams",
			"data" : controller.project.team
		},
		{
			"icon" : "fa fa-clock-o",
			"title" : "Project time",
			"data" :  controller.project.time + " days"
		}];
	},
	function(msg)
	{
		alert(msg);
	});

	//////////////////
	
	projectdescriptionFactory.getImageById($routeParams.id)
	.then(function(images)
	{
		if (images.length == 0)
			controller.pictures = false;
		else
		{
			for (image in images)
				if (images[image].gallery === 0)
				controller.pictures.push({img : "assets/img/" + images[image].image})
		}

		projectdescriptionFactory.getDetailProject($routeParams.id)
		.then(function(projectDetails)
		{
			controller.descriptionProject = projectDetails;
			for (item in controller.descriptionProject)
			{
				for (img in images)
				{
					if (images[img].id == controller.descriptionProject[item].img1)
						controller.descriptionProject[item].img1 = images[img].image;
					if (images[img].id == controller.descriptionProject[item].img2)
						controller.descriptionProject[item].img2 = images[img].image;
				}
			}
		});
	});

	//////////////////

	controller.videoScroll = function()
	{
		$('html, body').animate({
			scrollTop: $("#video").offset().top
		}, 2000);
	}
	return ;
}])
app.controller('skillsController', ['$scope', 'skillsFactory', function($scope, skillsFactory){
	var controller = this;

	this.language = [];
	this.recognitionData = [];
	this.softwareData = [];
	this.foreignLanguage = [];
	this.hobbies = [];
	this.knowledge = [];
	this.typeLanguage = "Web";

	skillsFactory.getAllLanguage().then(function(data)
		{
			controller.language = data;
		},
		function(error)
		{
			console.log(error)
		});

	skillsFactory.getRecognition().then(function(data)
		{
			controller.recognitionData = data;
		},
		function(error)
		{
			console.log(error)
		});

	skillsFactory.getSoftware().then(function(data)
		{
			controller.softwareData = data;
		},
		function(error)
		{
			console.log(error)
		});

	skillsFactory.getForeignLanguage().then(function(data)
		{
			controller.foreignLanguage = data;
		},
		function(error)
		{
			console.log(error)
		});

	skillsFactory.getKnowledge().then(function(data)
		{
			controller.knowledge = data;
		},
		function(error)
		{
			console.log(error)
		});

	skillsFactory.getHobbies().then(function(data)
		{
			controller.hobbies = data;
		},
		function(error)
		{
			console.log(error)
		});

	this.showLanguage = function(type, $event)
	{
		$('#labelMobile').removeClass("category-active");
		$('#labelCompiled').removeClass("category-active");
		$('#labelWeb').removeClass("category-active");
		$($event.target).addClass("category-active");
		controller.typeLanguage = type;
	}

	return;
}]);

// app.filter('space', function () {
//     return function(text) {
//         return text.replace(/\n/g, '<br/>');
//     }
// })
// .filter('noHTML', function () {
//     return function(text) {
//         return text
//                 .replace(/&/g, '&amp;')
//                 .replace(/>/g, '&gt;')
//                 .replace(/</g, '&lt;');
//     }
// });
app.directive('ngCarousel', ['$document', function($document){
	return {
		restrict: 'E',
		scope : {
			dArrow : '=arrow',
			dWidthResize : '=sizeXResize',
			dHeightResize : '=sizeYResize',
			dWidth : '=sizeX',
			dHeight : '=sizeY',
			dRotationCursor : '=rotationCursor',
			dTarget : "=targetArrow",
			dEffect : "=effect",
			dArrowTransition : "=arrowTransition",
			dPlay : "=play"
		},
		transclude : true,
		templateUrl : "shared/carousel/carouselView.html",
		controller : function($scope)
		{
			
		},
		link: function(scope, element, attrs) {
			var carousel = new Ccarousel();

			if (scope.dPlay !== undefined)
			{
				element.find(".carousel").carousel({
					interval: scope.dPlay,
					pause: false
				})
			}

			carousel.setArrow(element, scope.dArrow, scope.dTarget);
			carousel.setHeight(element, scope.dHeight, scope.dHeightResize);
			carousel.setWidth(element, scope.dWidth, scope.dWidthResize);
			carousel.setRotationCursor(element, scope.dRotationCursor);

			scope.getNextImg = function()
			{
				carousel.setNextImg(element);
			}
			scope.getPrevImg = function()
			{
				carousel.setPrevImg(element);
			}
		}
	}
}])

app.directive('ngDiagram', [function(){
	return {
		scope : {
		},
		restrict: 'A',
		link: function(scope, element, attrs) {
			var sizeD = 110;
			if (attrs.sizeDiagram != undefined)
			{
				sizeD = attrs.sizeDiagram;
			}
			element.diagram({
				size: sizeD,
				borderWidth: "8",
				bgFill: "#8D99A6",
				frFill: "#63759D",
				textSize: 22,
				textColor: '#262626',
				data : attrs.percent
			});
		}
	}
}])

app.directive('ngFooter', function(){
	return {
		restrict: 'E',
		scope : {

		},
		templateUrl : "shared/footer/footerView.html",
		link : function(scope, element, attrs)
		{
			if (attrs.color != undefined)
			{
				scope.fcolor = attrs.color;
				element.find(".line-footer").css("background-color", attrs.color);
			}
		},

		controller: function($scope) {
			this.getColor = function()
			{
				return $scope.fcolor;
			};

			$scope.items = [{
				"name" : "Liens de navigation",
				"value" : 	[{"name" : "Accueil", "link": "#", "icon": "fa-home"},
							{"name" : "Projets", "link": "#/project", "icon": "fa-puzzle-piece"},
							{"name" : "Blog", "link": "#/blog", "icon": "fa-tasks"},
							{"name" : "Compétences", "link": "#/skills", "icon": "fa-trophy"},
							{"name" : "À propos", "link": "#/about", "icon": "fa-search"},
							{"name" : "Contactez-moi", "link": "#/contact", "icon": "fa-location-arrow"}]
			},
			{
				"name" : "Réseaux sociaux",
				"value" : 	[{"name" : "Google +", "link": "https://plus.google.com/u/0/114664008323423476205", "icon": "fa-google-plus"},
							{"name" : "Facebook", "link": "https://www.facebook.com/aurelien.negrier.1", "icon": "fa-facebook"},
							{"name" : "Twitter", "link": "https://twitter.com/negrie_a", "icon": "fa-twitter"},
							{"name" : "Linkedin", "link": "https://fr.linkedin.com/in/aurélien-negrier-11b15990", "icon": "fa-linkedin"},
							{"name" : "Github", "link": "https://github.com/negrie-a", "icon": "fa-github "}]
			},
			{
				"name" : "Contactez-moi",
				"value" : [{"name" : "negrier.aurelien@gmail.com", "link": "#/contact", "icon": "fa-envelope"},
							{"name" : "06.42.33.68.99", "link": "#/contact", "icon": "fa-phone"}]
			}];
		}
	}
});

app.directive('ngFooterItem', function()
{
	return {
		require : "^ngFooter",
		restrict: 'A',
		link : function(scope, element, attrs, ctrlFooter)
		{
			var color = ctrlFooter.getColor();
			if (color != undefined)
			{
				element.find("span").hover(function()
				{
					$(this).css("color", color);
				},
				function()
				{
					$(this).css("color", "white");
				});
			}
		}
	}
});

app.directive('ngHeaderbar', ['$location', function(location){
	return {
		scope : {
			active : "=",
			fixed : "=",
			transparence : "="
		},
		restrict: 'E',
		templateUrl: "shared/headerBar/headerbarView.html",
		link: function(scope, element, attrs) {
			var headerBar = new CheaderBar();
			if (scope.active !== true)
				headerBar.start(element);
//			else
//				headerBar.startOnScroll(element);
			element.on('$destroy', function()
			{
				$(window).off('scroll');
				delete headerBar;
			})
			headerBar.fixedBar(element, scope.fixed);
			headerBar.transparentBar(element, scope.transparence)
		},
		controller: function($scope, $location) {
			$scope.$on('$routeChangeSuccess', function (scope, next, current) {
				if (location.path() === "/" || location.path().includes("/project/"))
					$scope.hidebar = "true";
				else
					$scope.hidebar = "false";
			});

			$scope.isActive = function(route) {
				return route === $location.path();
			}
		}
	}
}])

app.directive('ngMasonry', [function() {
	return {
		restrict : 'E',
		scope : {
		},
		transclude : true,
		templateUrl : "shared/masonry/masonryView.html",
		controller : function($scope)
		{
			this.setPictures =  function(pcts)
			{
				$scope.pictures = pcts;
			}

			this.getPictures =  function()
			{
				return $scope.pictures;
			}
		},

		link: function(scope, element, attrs) 
		{
		}
	}
}])

app.directive('ngPicture', ['$modal', '$log', function($modal, $log) {
	return {
		require: "^ngMasonry",
		restrict : 'E',
		scope : {
			ngItems : '=ngItems',
		},
		templateUrl : "shared/masonry/masonryPictureView.html",
		link: function(scope, element, attrs, ngMasonryCtrl)
		{
			ngMasonryCtrl.setPictures(scope.ngItems);
		},
		controller: function($scope)
		{
			$scope.open = function (num) {
				var modalInstance = $modal.open({
				 templateUrl: 'shared/masonry/masonryDisplayPictureView.html',
			     controller: 'ctrlModalMasonry',
			     windowClass: 'app-modal-window',
			     backdropClass : 'app-backdrop-window',
			     resolve: {
			     	items: function () {
			     		var data = {
			     			'items' : $scope.ngItems,
			     			'currentItems' : num
			     			};
			     		return data;
			     	}
			     }
			 });

				modalInstance.result.then(function (selectedItem) {
					$scope.selected = selectedItem;
				}, function () {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};
		}
	}
}])

app.controller('ctrlModalMasonry', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items)
{
	$scope.items = items.items;
	$scope.currentItems = items.currentItems;

	$scope.nextImg = function()
	{
		if ($scope.currentItems < $scope.items.length - 1)
			$scope.currentItems++;
	}

	$scope.prevImg = function()
	{
		if ($scope.currentItems > 0)
			$scope.currentItems--;
	}
	$scope.close = function()
	{
		$modalInstance.close();
	}

//	$( ".app-modal-window .modal-dialog img" ).css("height", "100px");
}]);


app.directive('ngImageModal', [function()
{
	return {
		restrict : 'A',
		link: function(scope, element, attrs) 
		{
			scope.centerImg = function()
			{
				var heightWindows = $(window).height();
				var widthWindows = $(window).width();
				var heavyImage = new Image(); 
				heavyImage.src = attrs.src;
				heavyImage.onload = function() {
					var heightImage = heavyImage.height;
					var widthImage = heavyImage.width;
					if (widthImage > widthWindows - (widthWindows * 20 / 100))
					{
						var widthMax = widthWindows - (widthWindows * 20 / 100);
						var coef = widthImage / widthMax * 100;
						heightImage = heavyImage.height * 100 / coef;
					}

					if (heightImage > heightWindows - ((heightWindows) * 10 / 100))
					{
						heightImage = heightWindows - ((heightWindows) * 10 / 100);
					}

					element.css("height", heightImage);
					element.css("max-height", (heightWindows)+ "px");
					element.css("margin-top", ((heightWindows / 2) - (heightImage / 2)) + "px");
				}
			}
			scope.$watch(
   			function() { return attrs.src; },
   			function() {scope.centerImg();},
    		true
			);
		}
	}
}])

app.directive('ngArrowModal', [function()
{
	return {
		restrict : 'A',
		link: function(scope, element, attrs) 
		{
			var heightWindows = $(window).height();
			//var heightImage = $('.tototiti').height();
			element.css("top", ((heightWindows / 2) - 40) + "px"); // -40 (height arrow / 2)
			//element.css("margin-top", ((heightWindows / 2) + (heightImage / 2) ) + "px");
		}
	}
}])

app.directive('ngDisplayPicture', [function() {
	return {
		require: "^ngMasonry",
		restrict : 'E',
		scope : false,
		//templateUrl : "shared/masonry/masonryDisplayPictureView.html",
		link: function(scope, element, attrs, ngMasonryCtrl) 
		{
			//ngMasonryCtrl.activeModal();
		}
	}
}])

app.directive('ngParallax', function() {
	return {
		restrict : 'A',
		scope : {
			image : '=ngParallax'
		},
		link: function(scope, element, attrs) 
		{
			var parallax = new Cparallax(element, scope.image);
			parallax.start();
		}
	}
})


app.directive('ngSkillbar', function() {
	return {
		restrict : 'A',
		scope : {
			image : '=ngParallax'
		},
		link: function(scope, element, attrs) {
			jQuery(document).ready(function(){
				element.each(function(){
					jQuery(this).find('.skillbar-bar').animate({
						width:attrs.percent
					},6000);
				});
			});
		}
	}
})

function Ccarousel() {
	this.degre = 10;
	this.zoom = 1.3;
	var self = this;
	var targetArrow;

	this.activeZoom = function(element)
	{
		element.find(".carousel .item img").css({
			'-webkit-transform' : 'scale(' + this.zoom + ')',
			'-moz-transform'    : 'scale(' + this.zoom + ')',
			'-ms-transform'     : 'scale(' + this.zoom + ')',
			'-o-transform'      : 'scale(' + this.zoom + ')',
			'transform'         : 'scale(' + this.zoom + ')'
		});
	}

	this.setArrow = function(element, bool, target)
	{
		if (bool !== true)
		{
			element.find("#arrow-carousel").remove();
		}
		if (target !== undefined)
			element.find(".button-scroll").click(function() {
				$('html, body').animate({
					scrollTop: $(target).offset().top
				}, 1500);
			});
	}

	this.setHeight = function(element, height, scale)
	{
		if (typeof height !== 'undefined')
		{
			element.find("img").css("min-height", height + "px");
			element.find("img").css("max-height", height + "px");
			element.find(".carousel").css("height", height + "px");
		}
		else
		{
			$(document).ready(function(){
			element.find("img").css("min-height", $( window ).height().toString() + "px");
			element.find("img").css("max-height", $( window ).height().toString() + "px");
			});
			if (scale === false)
				return
			else
			{
				$(document).ready(function(){
					$(window).resize(function() {
						element.find("img").css("min-height", element.find(".carousel").height().toString() + "px");
						element.find("img").css("max-height", element.find(".carousel").height().toString() + "px");
					});
				});
			}
		}
	}

	this.setWidth = function(element, width, scale)
	{
		if (typeof width !== 'undefined')
		{
			element.find("img").css("min-width", width + "px");
			element.find("img").css("max-width", width + "px");
			element.find(".carousel").css("width", width + "px");
		}
		else
		{
			element.find("img").css("min-width", $( window ).width().toString() + "px");
			element.find("img").css("max-width", $( window ).width().toString() + "px");
			if (scale === false)
				return
			else
			{
				$(document).ready(function(){
					$(window).resize(function(){
						console.log(element.find(".carousel").width());
						element.find("img").css("min-width", element.find(".carousel").width().toString() + "px");
						element.find("img").css("max-width", element.find(".carousel").width().toString() + "px");
					});
				});
			}
		}
	}

	this.convertCoord = function(x, echelle)
	{
		if (x > echelle)
			x = echelle;
		var coord = echelle / 2;
		if (x < coord)
			return (coord - x) * -1;
		return x - coord;
	}

	this.rotationWithMousse = function(event, element)
	{
		var valeuX = this.convertCoord(event.pageX - element.offset().left, element.find(".carousel .active img").width());
		var valeuY = this.convertCoord(event.pageY - element.offset().top, element.find(".carousel .active img").height());

		var resY = valeuX * this.degre / (element.find(".carousel .active img").width() / 2);
		var resX = valeuY * this.degre / (element.find(".carousel .active img").height() / 2) * -1;

		element.find(".carousel .active:not(.left) img").css({
			'-webkit-transform' : 'rotateY(' + resY + 'deg) ' + 'rotateX(' + resX + 'deg) ' + 'scale(' + this.zoom + ')',
			'-moz-transform'    : 'rotateY(' + resY + 'deg) ' + 'rotateX(' + resX + 'deg) ' + 'scale(' + this.zoom + ')',
			'-ms-transform'     : 'rotateY(' + resY + 'deg) ' + 'rotateX(' + resX + 'deg) ' + 'scale(' + this.zoom + ')',
			'-o-transform'      : 'rotateY(' + resY + 'deg) ' + 'rotateX(' + resX + 'deg) ' + 'scale(' + this.zoom + ')',
			'transform'         : 'rotateY(' + resY + 'deg) ' + 'rotateX(' + resX + 'deg) ' + 'scale(' + this.zoom + ')'
		});
	};

	this.setRotationCursor = function(element, bool)
	{
		if (bool === true)
		{
			this.activeZoom(element);
			element.on('mousemove', function(event){self.rotationWithMousse(event, element)});
		}
	}

	this.setNextImg = function(element)
	{
		element.find(".carousel").carousel('next');
	}

	this.setPrevImg = function(element)
	{
		element.find(".carousel").carousel('prev');
	}
}

/*

jQuery-плагин для построения круговых диаграмм

Вызов:

в html создается разметка
<div data-percent="15.2%"></div>

здесь указывается data-атрибут data-percent с данными,
которые затем будут отображены на диаграмме.

$(jQuery Selector).diagram({ 
	size: "200",
	borderWidth: "20",
	bgFill: "#95a5a6",
	frFill: "#1abc9c",
	textSize: 54,
	textColor: '#2a2a2a'
});

параметры:
size - размер диаграммы в px
borderWidth - толщина обводки
bgFill - цвет незаполненной части
frFill - цвет заполненной части
textSize - размер шрифта для надписи
textColor - цвет шрифта для надписи
font - семейство шрифтов (например, "'PT Sans', Arial, sans-serif")

если не передать параметры, то будут установлены параметры по-умолчанию
var defaults = {
	size: "100",
	borderWidth: "10",
	bgFill: '#bbb',
	frFill: '#0bf',
	textSize: 50,
	font: "serif",
	textColor: '#000'
};


поддержка браузерами: в IE не работает

*/



(function($) {

	$.fn.diagram = function(params){

		function rotate(angle) {
			return {
				"-webkit-transform": "rotate("+angle+"deg)",
				"-moz-transform": "rotate("+angle+"deg)",
				"-ms-transform": "rotate("+angle+"deg)",
				"-o-transform": "rotate("+angle+"deg)",
				"transform": "rotate("+angle+"deg)"
			};
		}

		var defaults = {
			size: "100",
			borderWidth: "10",
			bgFill: '#bbb',
			frFill: '#0bf',
			textSize: 50+'px',
			textColor: '#000'
		};

		var options = $.extend({}, defaults, params);

		var $this = $(this);
		var dataAttr = $this.data("percent");
		var data = parseFloat(params.data);

		var cssMain = {
			"position": "relative",
			"width": options.size+"px",
			"height": options.size+"px",
			"border": options.borderWidth + "px " + "solid" + options.bgFill,
			"border-radius": "50%",
			"z-index": "1"
		};

		var cssElems = {
			"position": "absolute",
			"top": -options.borderWidth+"px",
			"right": -options.borderWidth+"px",
			"bottom": -options.borderWidth+"px",
			"left": -options.borderWidth+"px",
			"border": options.borderWidth+"px " + "solid",
			"border-radius": "50%"
		};

		$this.css(cssMain);
		
		var text = $('<span></span>')
		.appendTo($this)
		.css({
			"display": "block",
			"position": "relative",
			"z-index": "2",
			"text-align": "center",
			"height": options.size+"px",
			"font-size":  options.textSize+"px",
			"line-height": options.size - (options.size / 5)+"px",
			"color": options.textColor
		})
		.text(params.data);
		
		var bg = $('<div></div>')
		.appendTo($this)
		.css(cssElems)
		.css({
			"border-color": options.frFill,
			"border-left-color": "transparent",
			"border-bottom-color": "transparent",
			"z-index": "1"
		});

		var fill = $('<div></div>')
		.appendTo($this)
		.css(cssElems)
		.css({
			"border-color": options.bgFill,
			"border-left-color": "transparent",
			"border-bottom-color": "transparent",
			"z-index": "1"
		});

		var angle;
		var x = 0;
		var toto = function()
		{
			if (x < data)
			{
				if (x >= 0 && x <= 50) {
					angle = (225 - 45)/50*x + 45;
				} else {
					angle = (405 - 225)/50*x + 225;
					fill.css({
						"border-color": options.frFill,
						"border-left-color": "transparent",
						"border-bottom-color": "transparent",
						"z-index": "1"
					});
				}
				bg.css(rotate(45));
				fill.css(rotate(angle));
				x += 0.2;
				setTimeout(toto, 7);
			}
		}
		toto();
		return this;
	};

})(jQuery);
var CheaderBar = function() {
	var animateFinish = true;
	
	this.startOnScroll = function(element)
	{
		$(document).ready(function(){
			$(window).scroll(function(){
				var posWindow = $(window).scrollTop();
				var posActive = $("#show-header-bar").offset().top - 100;

				$(".intro-message").css("opacity", (($(window).scrollTop() * 1.5 / 700) - 1) * -1); // A VIRER D'ICI
				if (posWindow >= posActive && animateFinish == true)
				{
					animateFinish = false;
					element.find(".navbar-default").css("top", "0px");
					element.find(".navbar-default").animate({opacity : 1}, 200, function(){animateFinish = true;});
				}
				else if (posWindow < posActive && animateFinish == true)
				{
					animateFinish = false;
					element.find(".navbar-default").animate({opacity : 0}, 200, function(){element.find(".navbar-default").css("top", "-55px"); animateFinish = true;});
				}
			});
		});
	}

	this.start = function(element)
	{
		element.find(".navbar-default").css("top", "0px");
		element.find(".navbar-default").css("opacity", 1);
	}

	// this.colorSectionEnable = function(element, path, color)
	// {
	// 	element.find(".navbar-default #" + path).css("color", color);
	// }

	// this.colorSectionDisable = function(element, path, color)
	// {
	// 	element.find(".navbar-default #" + path).css("color", color);

	// 	element.find(".navbar-default #" + path).mouseover(function() {$(this).css({
	// 		"color": "#4DA5F5",
	// 		"-webkit-transition": "color 200ms linear",
	// 		"-moz-transition": "color 200ms linear",
	// 		"-o-transition": "color 200ms linear",
	// 		"-ms-transition": "color 200ms linear",
	// 		"transition": "color 200ms linear"
	// 	})});

	// 	element.find(".navbar-default #" + path).mouseleave(function() {$(this).css({
	// 		"color": "#FFFFFF",
	// 		"-webkit-transition": "color 200ms linear",
	// 		"-moz-transition": "color 200ms linear",
	// 		"-o-transition": "color 200ms linear",
	// 		"-ms-transition": "color 200ms linear",
	// 		"transition": "color 200ms linear"
	// 	})});

	// }

	this.transparentBar = function(element, value)
	{
		if (value === true)
		{
			element.find(".navbar-default").css('background-color', 'rgba(250,250,250,0)');
		}
	}

	this.fixedBar = function(element, value)
	{
		if (value === false)
		{
			element.find(".navbar-default").css("position", "relative");
			element.find(".navbar-fixed-top").css("position", "relative");
		}
	}
}

function Cparallax(element, image)
{
	element.addClass("parallax");
	element.css("background-image", "url(" + image + ")");

	this.start = function()
	{
		$(document).ready(function(){
			$(window).scroll(function(){
				var posWindow = $(window).scrollTop();
				var heightWindow = $(window).height();
				var posParallax = element.offset().top;
				var posWindowBottom = (posWindow + heightWindow);

				var y = posParallax - posWindow;
				var pourcent = y * 100 / heightWindow;

				if (pourcent < 0)
				{
					y = posWindow - posParallax;
					console.log("lol");
					element.css("background-position", "0% " + 0 + "px");
				}
				else
				{
					console.log(pourcent);
					element.css("background-position", "0% " + pourcent + "%");
				}

			})
		})
		$(document).ready(function(){
			$(window).resize(function(){
				var posWindow = $(window).scrollTop();
				var heightWindow = $(window).height();
				var posParallax = element.offset().top;
				var posWindowBottom = (posWindow + heightWindow);

				var y = posParallax - posWindow;
				var pourcent = y * 100 / heightWindow;
				if (pourcent < 0)
				{
					y = posWindow - posParallax;
					element.css("background-position", "0% " + y + "px");
				}
				else
					element.css("background-position", "0% " + pourcent + "%");

			})
		})
	}
}

function Cvideogular()
{
	
}
app.controller('indexController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location){
	$scope.animationActive = 'false';
	
	$scope.$on('$routeChangeSuccess', function (scope, next, current) {
		$scope.currentPath = $location.path();
	})
	
	setTimeout(function(){
		$(document).ready(function()
		{
			$scope.animationActive = 'true';
		});
	}, 1000);

	$scope.$on('$viewContentLoaded', function(){
		setTimeout(test, 1500);
	});


	function test() {
		$scope.$apply(function () {
        $scope.isRouteLoading = 'true';
		});
	}
	return;
}]);

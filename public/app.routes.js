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

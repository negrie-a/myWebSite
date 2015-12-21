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
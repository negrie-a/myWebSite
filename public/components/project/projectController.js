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

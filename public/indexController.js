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
		$scope.isRouteLoading = 'true';
	});
	return;
}]);

app.controller('indexController', ['$scope', '$rootScope', function ($scope, $rootScope){
	$scope.animationActive = 'false';

	setTimeout(function(){
		$(document).ready(function()
		{
			$scope.animationActive = 'true';
		});
	}, 1000);

	// $rootScope.$on("$routeChangeSuccess", function(){
	// 	window.scrollTo(0,0);
	// })
	return;
}]);

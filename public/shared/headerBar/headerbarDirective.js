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

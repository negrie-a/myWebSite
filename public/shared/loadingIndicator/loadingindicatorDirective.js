app.directive('ngLoadingIndicator', ['$rootScope', function($rootScope){
	return {
		restrict: 'E',
		template: "<div class='col-lg-12' ng-if='isRouteLoading'><h1>Loading <i class='fa fa-cog fa-spin'></i></h1></div>",
		link: function(scope, element, attrs) {
			scope.isRouteLoading = false;

        $rootScope.$on('$routeChangeStart', function() {
          scope.isRouteLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
          scope.isRouteLoading = false;
        });
		},
	}
}])

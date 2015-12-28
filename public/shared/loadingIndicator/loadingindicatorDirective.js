app.directive('ngLoadingIndicator', ['$rootScope', function($rootScope){
	return {
		restrict: 'A',
		template: "<div class='col-lg-12' ng-if='isRouteLoading'><h1>Loading <i class='fa fa-cog fa-spin'></i></h1></div>",
		scope: true,
		link: function(scope, element, attrs) {
			$rootScope.isRouteLoading = false;

        // $rootScope.$on('$routeChangeStart', function() {
        //   scope.isRouteLoading = true;
        // });

        // $rootScope.$on('$routeChangeSuccess', function() {
       	// 	setTimeout(function(){ scope.isRouteLoading = false; }, 3000); 	
        // });
		},
	}
}])

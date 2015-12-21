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


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

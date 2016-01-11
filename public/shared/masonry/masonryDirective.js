app.directive('ngMasonry', [function() {
	return {
		restrict : 'E',
		scope : {
		},
		transclude : true,
		templateUrl : "shared/masonry/masonryView.html",
		controller : function($scope)
		{
			this.setPictures =  function(pcts)
			{
				$scope.pictures = pcts;
			}

			this.getPictures =  function()
			{
				return $scope.pictures;
			}
		},

		link: function(scope, element, attrs) 
		{
		}
	}
}])

app.directive('ngPicture', ['$modal', '$log', function($modal, $log) {
	return {
		require: "^ngMasonry",
		restrict : 'E',
		scope : {
			ngItems : '=ngItems',
		},
		templateUrl : "shared/masonry/masonryPictureView.html",
		link: function(scope, element, attrs, ngMasonryCtrl)
		{
			ngMasonryCtrl.setPictures(scope.ngItems);
		},
		controller: function($scope)
		{
			$scope.open = function (num) {
				var modalInstance = $modal.open({
				 templateUrl: 'shared/masonry/masonryDisplayPictureView.html',
			     controller: 'ctrlModalMasonry',
			     windowClass: 'app-modal-window',
			     backdropClass : 'app-backdrop-window',
			     resolve: {
			     	items: function () {
			     		var data = {
			     			'items' : $scope.ngItems,
			     			'currentItems' : num
			     			};
			     		return data;
			     	}
			     }
			 });

				modalInstance.result.then(function (selectedItem) {
					$scope.selected = selectedItem;
				}, function () {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};
		}
	}
}])

app.controller('ctrlModalMasonry', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items)
{
	$scope.items = items.items;
	$scope.currentItems = items.currentItems;

	$scope.nextImg = function()
	{
		if ($scope.currentItems < $scope.items.length - 1)
			$scope.currentItems++;
	}

	$scope.prevImg = function()
	{
		if ($scope.currentItems > 0)
			$scope.currentItems--;
	}
	$scope.close = function()
	{
		$modalInstance.close();
	}

//	$( ".app-modal-window .modal-dialog img" ).css("height", "100px");
}]);


app.directive('ngImageModal', [function()
{
	return {
		restrict : 'A',
		link: function(scope, element, attrs) 
		{
			scope.centerImg = function()
			{
				var heightWindows = $(window).height();
				var widthWindows = $(window).width();
				var heavyImage = new Image(); 
				heavyImage.src = attrs.src;
				heavyImage.onload = function() {
					var heightImage = heavyImage.height;
					var widthImage = heavyImage.width;
					if (widthImage > widthWindows - (widthWindows * 20 / 100))
					{
						var widthMax = widthWindows - (widthWindows * 20 / 100);
						var coef = widthImage / widthMax * 100;
						heightImage = heavyImage.height * 100 / coef;
					}

					if (heightImage > heightWindows - ((heightWindows) * 10 / 100))
					{
						console.log(heightImage);
						heightImage = heightWindows - ((heightWindows) * 10 / 100);
					}

					delete heavyImage;
					element.css("height", heightImage);
					element.css("max-height", (heightWindows)+ "px");
					element.css("margin-top", ((heightWindows / 2) - (heightImage / 2)) + "px");
				}
			}
			scope.$watch(
   			function() { return attrs.src; },
   			function() {scope.centerImg();},
    		true
			);
		}
	}
}])

app.directive('ngArrowModal', [function()
{
	return {
		restrict : 'A',
		link: function(scope, element, attrs) 
		{
			var heightWindows = $(window).height();
			//var heightImage = $('.tototiti').height();
			element.css("top", ((heightWindows / 2) - 40) + "px"); // -40 (height arrow / 2)
			//element.css("margin-top", ((heightWindows / 2) + (heightImage / 2) ) + "px");
		}
	}
}])

app.directive('ngDisplayPicture', [function() {
	return {
		require: "^ngMasonry",
		restrict : 'E',
		scope : false,
		//templateUrl : "shared/masonry/masonryDisplayPictureView.html",
		link: function(scope, element, attrs, ngMasonryCtrl) 
		{
			//ngMasonryCtrl.activeModal();
		}
	}
}])

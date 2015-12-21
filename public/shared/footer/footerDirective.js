app.directive('ngFooter', function(){
	return {
		restrict: 'E',
		scope : {

		},
		templateUrl : "shared/footer/footerView.html",
		link : function(scope, element, attrs)
		{
			if (attrs.color != undefined)
			{
				scope.fcolor = attrs.color;
				element.find(".line-footer").css("background-color", attrs.color);
			}
		},

		controller: function($scope) {
			this.getColor = function()
			{
				return $scope.fcolor;
			};

			$scope.items = [{
				"name" : "Liens de navigation",
				"value" : 	[{"name" : "Acceuil", "link": "#", "icon": "fa-home"},
							{"name" : "Projets", "link": "#/project", "icon": "fa-puzzle-piece"},
							{"name" : "Blog", "link": "#/blog", "icon": "fa-tasks"},
							{"name" : "Compétences", "link": "#/skills", "icon": "fa-trophy"},
							{"name" : "À propos", "link": "#/about", "icon": "fa-search"},
							{"name" : "Contactez-moi", "link": "#/contact", "icon": "fa-location-arrow"}]
			},
			{
				"name" : "Réseaux sociaux",
				"value" : 	[{"name" : "Google +", "link": "#", "icon": "fa-google-plus"},
							{"name" : "Facebook", "link": "#/project", "icon": "fa-facebook"},
							{"name" : "Twitter", "link": "https://twitter.com/negrie_a", "icon": "fa-twitter"},
							{"name" : "Linkedin", "link": "#/skills", "icon": "fa-linkedin"}]
			},
			{
				"name" : "Contactez-moi",
				"value" : [{"name" : "negrier.aurelien@gmail.com", "link": "#/contact", "icon": "fa-envelope"},
							{"name" : "06.42.33.68.99", "link": "#/contact", "icon": "fa-phone"}]
			}];
		}
	}
});

app.directive('ngFooterItem', function()
{
	return {
		require : "^ngFooter",
		restrict: 'A',
		link : function(scope, element, attrs, ctrlFooter)
		{
			var color = ctrlFooter.getColor();
			if (color != undefined)
			{
				element.find("span").hover(function()
				{
					$(this).css("color", color);
				},
				function()
				{
					$(this).css("color", "white");
				});
			}
		}
	}
});
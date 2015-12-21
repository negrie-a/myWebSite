app.directive('ngSkillbar', function() {
	return {
		restrict : 'A',
		scope : {
			image : '=ngParallax'
		},
		link: function(scope, element, attrs) {
			jQuery(document).ready(function(){
				element.each(function(){
					jQuery(this).find('.skillbar-bar').animate({
						width:attrs.percent
					},6000);
				});
			});
		}
	}
})

app.directive('ngDiagram', [function(){
	return {
		scope : {
		},
		restrict: 'A',
		link: function(scope, element, attrs) {
			var sizeD = 110;
			if (attrs.sizeDiagram != undefined)
			{
				sizeD = attrs.sizeDiagram;
			}
			element.diagram({
				size: sizeD,
				borderWidth: "8",
				bgFill: "#8D99A6",
				frFill: "#63759D",
				textSize: 22,
				textColor: '#262626',
				data : attrs.percent
			});
		}
	}
}])

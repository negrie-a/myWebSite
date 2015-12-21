var CheaderBar = function() {
	var animateFinish = true;
	
	this.startOnScroll = function(element)
	{
		$(document).ready(function(){
			$(window).scroll(function(){
				var posWindow = $(window).scrollTop();
				var posActive = $("#show-header-bar").offset().top - 100;

				$(".intro-message").css("opacity", (($(window).scrollTop() * 1.5 / 700) - 1) * -1); // A VIRER D'ICI
				if (posWindow >= posActive && animateFinish == true)
				{
					animateFinish = false;
					element.find(".navbar-default").css("top", "0px");
					element.find(".navbar-default").animate({opacity : 1}, 200, function(){animateFinish = true;});
				}
				else if (posWindow < posActive && animateFinish == true)
				{
					animateFinish = false;
					element.find(".navbar-default").animate({opacity : 0}, 200, function(){element.find(".navbar-default").css("top", "-55px"); animateFinish = true;});
				}
			});
		});
	}

	this.start = function(element)
	{
		element.find(".navbar-default").css("top", "0px");
		element.find(".navbar-default").css("opacity", 1);
	}

	// this.colorSectionEnable = function(element, path, color)
	// {
	// 	element.find(".navbar-default #" + path).css("color", color);
	// }

	// this.colorSectionDisable = function(element, path, color)
	// {
	// 	element.find(".navbar-default #" + path).css("color", color);

	// 	element.find(".navbar-default #" + path).mouseover(function() {$(this).css({
	// 		"color": "#4DA5F5",
	// 		"-webkit-transition": "color 200ms linear",
	// 		"-moz-transition": "color 200ms linear",
	// 		"-o-transition": "color 200ms linear",
	// 		"-ms-transition": "color 200ms linear",
	// 		"transition": "color 200ms linear"
	// 	})});

	// 	element.find(".navbar-default #" + path).mouseleave(function() {$(this).css({
	// 		"color": "#FFFFFF",
	// 		"-webkit-transition": "color 200ms linear",
	// 		"-moz-transition": "color 200ms linear",
	// 		"-o-transition": "color 200ms linear",
	// 		"-ms-transition": "color 200ms linear",
	// 		"transition": "color 200ms linear"
	// 	})});

	// }

	this.transparentBar = function(element, value)
	{
		if (value === true)
		{
			element.find(".navbar-default").css('background-color', 'rgba(250,250,250,0)');
		}
	}

	this.fixedBar = function(element, value)
	{
		if (value === false)
		{
			element.find(".navbar-default").css("position", "relative");
			element.find(".navbar-fixed-top").css("position", "relative");
		}
	}
}

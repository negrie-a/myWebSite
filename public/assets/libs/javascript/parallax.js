function Cparallax(element, image)
{
	element.addClass("parallax");
	element.css("background-image", "url(" + image + ")");

	this.start = function()
	{
		$(document).ready(function(){
			$(window).scroll(function(){
				var posWindow = $(window).scrollTop();
				var heightWindow = $(window).height();
				var posParallax = element.offset().top;
				var posWindowBottom = (posWindow + heightWindow);

				var y = posParallax - posWindow;
				var pourcent = y * 100 / heightWindow;

				if (pourcent < 0)
				{
					y = posWindow - posParallax;
					console.log("lol");
					element.css("background-position", "0% " + 0 + "px");
				}
				else
				{
					console.log(pourcent);
					element.css("background-position", "0% " + pourcent + "%");
				}

			})
		})
		$(document).ready(function(){
			$(window).resize(function(){
				var posWindow = $(window).scrollTop();
				var heightWindow = $(window).height();
				var posParallax = element.offset().top;
				var posWindowBottom = (posWindow + heightWindow);

				var y = posParallax - posWindow;
				var pourcent = y * 100 / heightWindow;
				if (pourcent < 0)
				{
					y = posWindow - posParallax;
					element.css("background-position", "0% " + y + "px");
				}
				else
					element.css("background-position", "0% " + pourcent + "%");

			})
		})
	}
}

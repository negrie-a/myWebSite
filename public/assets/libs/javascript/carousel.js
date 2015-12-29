function Ccarousel() {
	this.degre = 10;
	this.zoom = 1.3;
	var self = this;
	var targetArrow;

	this.activeZoom = function(element)
	{
		element.find(".carousel .item img").css({
			'-webkit-transform' : 'scale(' + this.zoom + ')',
			'-moz-transform'    : 'scale(' + this.zoom + ')',
			'-ms-transform'     : 'scale(' + this.zoom + ')',
			'-o-transform'      : 'scale(' + this.zoom + ')',
			'transform'         : 'scale(' + this.zoom + ')'
		});
	}

	this.setArrow = function(element, bool, target)
	{
		if (bool !== true)
		{
			element.find("#arrow-carousel").remove();
		}
		if (target !== undefined)
			element.find(".button-scroll").click(function() {
				$('html, body').animate({
					scrollTop: $(target).offset().top
				}, 1500);
			});
	}

	this.setHeight = function(element, height, scale)
	{
		if (typeof height !== 'undefined')
		{
			element.find("img").css("min-height", height + "px");
			element.find("img").css("max-height", height + "px");
			element.find(".carousel").css("height", height + "px");
		}
		else
		{
			$(document).ready(function(){
			element.find("img").css("min-height", $( window ).height().toString() + "px");
			element.find("img").css("max-height", $( window ).height().toString() + "px");
			});
			if (scale === false)
				return
			else
			{
				$(document).ready(function(){
					$(window).resize(function() {
						element.find("img").css("min-height", element.find(".carousel").height().toString() + "px");
						element.find("img").css("max-height", element.find(".carousel").height().toString() + "px");
					});
				});
			}
		}
	}

	this.setWidth = function(element, width, scale)
	{
		if (typeof width !== 'undefined')
		{
			element.find("img").css("min-width", width + "px");
			element.find("img").css("max-width", width + "px");
			element.find(".carousel").css("width", width + "px");
		}
		else
		{
			element.find("img").css("min-width", $( window ).width().toString() + "px");
			element.find("img").css("max-width", $( window ).width().toString() + "px");
			if (scale === false)
				return
			else
			{
				$(document).ready(function(){
					$(window).resize(function(){
						console.log(element.find(".carousel").width());
						element.find("img").css("min-width", element.find(".carousel").width().toString() + "px");
						element.find("img").css("max-width", element.find(".carousel").width().toString() + "px");
					});
				});
			}
		}
	}

	this.convertCoord = function(x, echelle)
	{
		if (x > echelle)
			x = echelle;
		var coord = echelle / 2;
		if (x < coord)
			return (coord - x) * -1;
		return x - coord;
	}

	this.rotationWithMousse = function(event, element)
	{
		var valeuX = this.convertCoord(event.pageX - element.offset().left, element.find(".carousel .active img").width());
		var valeuY = this.convertCoord(event.pageY - element.offset().top, element.find(".carousel .active img").height());

		var resY = valeuX * this.degre / (element.find(".carousel .active img").width() / 2);
		var resX = valeuY * this.degre / (element.find(".carousel .active img").height() / 2) * -1;

		element.find(".carousel .active:not(.left) img").css({
			'-webkit-transform' : 'rotateY(' + resY + 'deg) ' + 'rotateX(' + resX + 'deg) ' + 'scale(' + this.zoom + ')',
			'-moz-transform'    : 'rotateY(' + resY + 'deg) ' + 'rotateX(' + resX + 'deg) ' + 'scale(' + this.zoom + ')',
			'-ms-transform'     : 'rotateY(' + resY + 'deg) ' + 'rotateX(' + resX + 'deg) ' + 'scale(' + this.zoom + ')',
			'-o-transform'      : 'rotateY(' + resY + 'deg) ' + 'rotateX(' + resX + 'deg) ' + 'scale(' + this.zoom + ')',
			'transform'         : 'rotateY(' + resY + 'deg) ' + 'rotateX(' + resX + 'deg) ' + 'scale(' + this.zoom + ')'
		});
	};

	this.setRotationCursor = function(element, bool)
	{
		if (bool === true)
		{
			this.activeZoom(element);
			element.on('mousemove', function(event){self.rotationWithMousse(event, element)});
		}
	}

	this.setNextImg = function(element)
	{
		element.find(".carousel").carousel('next');
	}

	this.setPrevImg = function(element)
	{
		element.find(".carousel").carousel('prev');
	}
}

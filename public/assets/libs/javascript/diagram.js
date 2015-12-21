/*

jQuery-плагин для построения круговых диаграмм

Вызов:

в html создается разметка
<div data-percent="15.2%"></div>

здесь указывается data-атрибут data-percent с данными,
которые затем будут отображены на диаграмме.

$(jQuery Selector).diagram({ 
	size: "200",
	borderWidth: "20",
	bgFill: "#95a5a6",
	frFill: "#1abc9c",
	textSize: 54,
	textColor: '#2a2a2a'
});

параметры:
size - размер диаграммы в px
borderWidth - толщина обводки
bgFill - цвет незаполненной части
frFill - цвет заполненной части
textSize - размер шрифта для надписи
textColor - цвет шрифта для надписи
font - семейство шрифтов (например, "'PT Sans', Arial, sans-serif")

если не передать параметры, то будут установлены параметры по-умолчанию
var defaults = {
	size: "100",
	borderWidth: "10",
	bgFill: '#bbb',
	frFill: '#0bf',
	textSize: 50,
	font: "serif",
	textColor: '#000'
};


поддержка браузерами: в IE не работает

*/



(function($) {

	$.fn.diagram = function(params){

		function rotate(angle) {
			return {
				"-webkit-transform": "rotate("+angle+"deg)",
				"-moz-transform": "rotate("+angle+"deg)",
				"-ms-transform": "rotate("+angle+"deg)",
				"-o-transform": "rotate("+angle+"deg)",
				"transform": "rotate("+angle+"deg)"
			};
		}

		var defaults = {
			size: "100",
			borderWidth: "10",
			bgFill: '#bbb',
			frFill: '#0bf',
			textSize: 50+'px',
			textColor: '#000'
		};

		var options = $.extend({}, defaults, params);

		var $this = $(this);
		var dataAttr = $this.data("percent");
		var data = parseFloat(params.data);

		var cssMain = {
			"position": "relative",
			"width": options.size+"px",
			"height": options.size+"px",
			"border": options.borderWidth + "px " + "solid" + options.bgFill,
			"border-radius": "50%",
			"z-index": "1"
		};

		var cssElems = {
			"position": "absolute",
			"top": -options.borderWidth+"px",
			"right": -options.borderWidth+"px",
			"bottom": -options.borderWidth+"px",
			"left": -options.borderWidth+"px",
			"border": options.borderWidth+"px " + "solid",
			"border-radius": "50%"
		};

		$this.css(cssMain);
		
		var text = $('<span></span>')
		.appendTo($this)
		.css({
			"display": "block",
			"position": "relative",
			"z-index": "2",
			"text-align": "center",
			"height": options.size+"px",
			"font-size":  options.textSize+"px",
			"line-height": options.size - (options.size / 5)+"px",
			"color": options.textColor
		})
		.text(params.data);
		
		var bg = $('<div></div>')
		.appendTo($this)
		.css(cssElems)
		.css({
			"border-color": options.frFill,
			"border-left-color": "transparent",
			"border-bottom-color": "transparent",
			"z-index": "1"
		});

		var fill = $('<div></div>')
		.appendTo($this)
		.css(cssElems)
		.css({
			"border-color": options.bgFill,
			"border-left-color": "transparent",
			"border-bottom-color": "transparent",
			"z-index": "1"
		});

		var angle;
		var x = 0;
		var toto = function()
		{
			if (x < data)
			{
				if (x >= 0 && x <= 50) {
					angle = (225 - 45)/50*x + 45;
				} else {
					angle = (405 - 225)/50*x + 225;
					fill.css({
						"border-color": options.frFill,
						"border-left-color": "transparent",
						"border-bottom-color": "transparent",
						"z-index": "1"
					});
				}
				bg.css(rotate(45));
				fill.css(rotate(angle));
				x += 0.2;
				setTimeout(toto, 7);
			}
		}
		toto();
		return this;
	};

})(jQuery);
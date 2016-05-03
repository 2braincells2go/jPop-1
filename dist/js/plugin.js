/*
	@author: Ilyas karim <ilyas.datoo@gmail.com>
	@date: 5/may/2016

*/
(function ($) {
	setInterval(function(){
		$(".navbar-brand").html($(document).width());
	},10)
	$.fn.subscription = function (options) {
		var settings = $.extend({
			popupParent : "gee-popup",
			scrollTopPx : 200,
			popupCloseButton : ".popup-close-button",
			heading : "heading - You can change",
			paragraph : "You can paragraph it from options. You can also change the input into your own template",
			userContent : '<div class="input"> <input class="form-control" type="text" placeholder="Your Email" > </div>',
			userContent : '<div class="input"> <input class="form-control" type="text" placeholder="Your Email" > </div>',
			buttonText : 'Click me',
			buttonClass : "btn btn-info btn-block btn-lg",
		}, options);
		var hasPopuped = false;
		var scrollValue = $(window).scrollTop();
		$(".gee-popup .popup-title").html(settings.heading);
		$(".gee-popup .paragraph").html(settings.paragraph);
		$(".gee-popup .user-content").html(settings.userContent);
		$(".gee-popup .btn").html(settings.buttonText);
		$(".gee-popup .btn").addClass(settings.buttonClass);
		$(window).on('scroll', function(event) {
			var scrollValue = $(window).scrollTop();
			if (scrollValue == settings.scrollTopPx || scrollValue > settings.scrollTopPx) {
				// call the popup
				if (hasPopuped == false) {
					$("html").addClass('active-poup');
				}
			}
		});
		$(".popup-close-button").click(function() {
			$('html').toggleClass('active-poup');
			hasPopuped = true;
		});
	}
}(jQuery))

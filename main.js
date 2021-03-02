(function($){
	$(document).ready(function(){
		

		$(function(){

			let 
				topLine 	      = $('.top-line'),
				topLine_offsetTop = topLine.offset().top,
				topLine_height    = topLine.outerHeight(),
				startPoint        = topLine_offsetTop + topLine_height; 

			var 
				wH = $(window).height(),
				dH = $(document).height(),
				scrollPoint = 0;

			$(window).on('scroll', function(){

				if(pageYOffset > startPoint){
					topLine.removeClass('slideDown').addClass('slideUp');
				} else {
					topLine.removeClass('slideUp').addClass('slideDown');
				}

			});
		});


		$(function(){

			let burger = $('.burger'),
				menu   = $('.menu');

			burger.click(function(){
				$(this).toggleClass('active');
				menu.toggleClass('active');
				$('body').toggleClass('lock');
			});

			burger.append('<span></span>');

		});

	});
})(jQuery);
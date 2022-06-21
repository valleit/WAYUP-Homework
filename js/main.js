$(function () {
	$(window).scroll(function() {
	    $('.ahead_of_header').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__flipInX");
	        }
	    });
	});
	
	$(window).scroll(function() {
	    $('.ahead_of_list').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__flipInX");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.form_items').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__zoomInDown");
	        }
	    });
	});
})
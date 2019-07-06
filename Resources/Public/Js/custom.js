$(document).ready(function($) {
	
	// add data-fancybox attribute for grouped images in lightbox
	$(".lightbox").each(function() {
		if ($(this).attr("rel")) {
			$(this).attr("data-fancybox", $(this).attr("rel"));
		}
	})
	$('.lightbox').fancybox();

});

$(window).resize(function() {
});

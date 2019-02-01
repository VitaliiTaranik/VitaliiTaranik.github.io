// page init
jQuery(function(){

	$(".lightbox-opener").fancybox({
		padding: 0,
		helpers: {
			overlay: {
			  locked: false
			}
		}
	});

	$("#btn-call").fancybox({
		href: '#callme',
		padding: 0,
		helpers: {
			overlay: {
			  locked: false
			}
		}
	});

	$('#gallery').slick({
		dots: false,
		arrows: true,
		slidesToShow: 4	,
  		slidesToScroll: 1,
	});
});
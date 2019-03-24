$(function () {
	$('.offer-content a').click(function (){
		$('.offer-graphics').css('width','300px')
	});

	$('.logo').click(function (){
		$('.offer-content h1').css('font-size','60px')
	});

	$('.menu li a').click(function (){
		$(this).toggleClass('active')
	});
});
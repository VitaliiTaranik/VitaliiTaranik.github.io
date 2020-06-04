//@prepros-append js-start.js
//@prepros-append script.js
//@prepros-append js-end.js
// alert("Привет"),alert("mir");

$('.nav__link-user , .nav__burger-user').click(function(){
    $('.header__form').slideToggle();
});
$('.header__close_btn').click(function(){
    $('.header__form').slideToggle();
});
$('.news__btn').click(function(){
    $('.news__items_main-duble').slideToggle();
});

// $('.header__burger__btn').click(function(){
//     $('.header__burger_menu').slideToggle();
// });

$(document).ready(function(){
	$('.header__burger__btn').click(function(){
		$('.header__burger__btn').toggleClass('active')
		$('.header__burger_menu').slideToggle()
	})
})

$(document).ready(function(){
	$('.slider').slick({
		speed:500,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		dots:true,
		adaptiveHeight: true,
	});

});

$(document).ready(function(){
	$('.feedback__slider_items').slick({
		speed:500,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: true,
		dots:true,
		infinite: true,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					arrows:false,
				}
			}
      ]
	});

});